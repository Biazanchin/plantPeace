import { useState, FormEvent, KeyboardEvent } from "react";
import { Plants } from "../types/Plants";
import plantImage from "../assets/image23.png";
import { FormErrors } from "../types/Form";
import { plantsService } from "../services/impls/plants";

const Form = () => {
  const [formValues, setFormValues] = useState({
    plantName: "",
    plantSubtitle: "",
    plantType: "",
    price: "",
    discount: "",
    label: "",
    features: "",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [imageIndex, setImageIndex] = useState(0);

  const imageUrls = [
    "/plant1.jpg",
    "/plant2.jpg",
    "/plant3.jpg",
    "/plant4.jpg",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newFeatures = formValues.features + ".\n";
      setFormValues((prevValues) => ({
        ...prevValues,
        features: newFeatures,
      }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    const {
      plantName,
      plantSubtitle,
      plantType,
      price,
      label,
      features,
      description,
      discount,
    } = formValues;

    if (!plantName) newErrors.plantName = "Please enter plant name";
    if (!plantSubtitle) newErrors.plantSubtitle = "Please enter plant subtitle";
    if (!plantType) newErrors.plantType = "Please enter plant type";
    if (!price) newErrors.price = "Please enter price";
    if (price === "$0.00") newErrors.price = "Please enter a valid price";
    if (discount === "0%")
      newErrors.discount = "Please enter a valid discount percentage";
    if (!label) newErrors.label = "Please select label";
    if (!features) newErrors.features = "Please enter features";
    if (!description) newErrors.description = "Please enter description";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      const {
        plantName,
        plantSubtitle,
        plantType,
        price,
        discount,
        label,
        features,
        description,
      } = formValues;

      const newPlant: Omit<Plants, "id"> = {
        name: plantName,
        subtitle: plantSubtitle,
        label: [label, plantType],
        price: price.replace("$", ""),
        isInSale: !!discount,
        discountPercentage: parseInt(discount.replace("%", "")),
        features,
        description,
        imgUrl: imageUrls[imageIndex],
      };

      try {
        const { status } = await plantsService.create(newPlant);
        if (status === 201) {
          setSuccessMessage("Your plant has been registered successfully");
          setFormValues({
            plantName: "",
            plantSubtitle: "",
            plantType: "",
            price: "",
            discount: "",
            label: "",
            features: "",
            description: "",
          });
          setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
          setTimeout(() => setSuccessMessage(""), 3000);
        }
      } catch (error) {
        console.error("Error sending request:", error);
      }
    }
  };

  return (
    <div className="flex items-center sm:items-start justify-center sm:justify-start font-inter bg-wisper lg:pl-20 relative mt-10">
      <div className="container 2xl:mx-auto justify-center lg:justify-normal sm:p-8 flex flex-col sm:flex-row max-w-4xl w-full">
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-2xl mb-6 text-primary-lunar-green font-semibold">
            Plant registration
          </h2>
          <hr className="mb-6 p-2 border-dark-gray" />
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="plantName"
                className="block text-dark-IBBNB font-medium"
              >
                Plant name
              </label>
              <input
                type="text"
                name="plantName"
                id="plantName"
                className="mt-1 p-2 w-full border border-dark-gray rounded-md"
                placeholder="Echinocereus Cactus"
                value={formValues.plantName}
                onChange={handleInputChange}
              />
              {errors.plantName && (
                <span className="text-red-500">{errors.plantName}</span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="plantSubtitle"
                className="block text-dark-IBBNB font-medium"
              >
                Plant subtitle
              </label>
              <input
                type="text"
                name="plantSubtitle"
                id="plantSubtitle"
                className="mt-1 p-2 w-full border border-dark-gray rounded-md"
                placeholder="A majestic addition to your plant collection"
                value={formValues.plantSubtitle}
                onChange={handleInputChange}
              />
              {errors.plantSubtitle && (
                <span className="text-red-500">{errors.plantSubtitle}</span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="plantType"
                className="block text-dark-IBBNB font-medium"
              >
                Plant type
              </label>
              <input
                type="text"
                name="plantType"
                id="plantType"
                className="mt-1 p-2 w-full border border-dark-gray rounded-md"
                placeholder="Cactus"
                value={formValues.plantType}
                onChange={handleInputChange}
              />
              {errors.plantType && (
                <span className="text-red-500">{errors.plantType}</span>
              )}
            </div>

            <div className="mb-4 gap-2 sm:flex">
              <div className="flex-1">
                <label
                  htmlFor="price"
                  className="block text-dark-IBBNB font-medium"
                >
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="mt-1 p-2 w-full border border-dark-gray rounded-md"
                  placeholder="$139.99"
                  value={formValues.price}
                  onChange={handleInputChange}
                />
                {errors.price && (
                  <span className="text-red-500">{errors.price}</span>
                )}
              </div>
              <div className="max-sm:mt-3 flex-1">
                <label
                  htmlFor="discount"
                  className="block text-dark-IBBNB font-medium"
                >
                  Discount percentage
                </label>
                <input
                  type="text"
                  name="discount"
                  id="discount"
                  className="mt-1 p-2 w-full border border-dark-gray rounded-md"
                  placeholder="20%"
                  value={formValues.discount}
                  onChange={handleInputChange}
                />
                {errors.discount && (
                  <span className="text-red-500">{errors.discount}</span>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-dark-IBBNB font-medium">
                Label:
              </label>
              <div className="mt-1 flex items-start">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="label"
                    className="mr-2"
                    id="indoor"
                    value="indoor"
                    checked={formValues.label === "indoor"}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="indoor"
                    className={`mr-4 font-medium ${formValues.label === "indoor" ? "text-dark-IBBNB" : "text-dark-gray"}`}
                  >
                    Indoor
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="label"
                    className="mr-2"
                    id="outdoor"
                    value="outdoor"
                    checked={formValues.label === "outdoor"}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="outdoor"
                    className={`font-medium ${formValues.label === "outdoor" ? "text-dark-IBBNB" : "text-dark-gray"}`}
                  >
                    Outdoor
                  </label>
                </div>
              </div>
              {errors.label && (
                <span className="text-red-500">{errors.label}</span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="features"
                className="block text-dark-IBBNB font-medium"
              >
                Features
              </label>
              <textarea
                name="features"
                id="features"
                className="mt-1 p-2 w-full border border-dark-gray rounded-md resize-none"
                placeholder="Species: Echinocereus..."
                value={formValues.features}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              {errors.features && (
                <span className="text-red-500">{errors.features}</span>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-dark-IBBNB font-medium"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="mt-1 p-2 w-full border border-dark-gray rounded-md resize-none"
                placeholder="Ladyfinger cactus..."
                value={formValues.description}
                onChange={handleInputChange}
              />
              {errors.description && (
                <span className="text-red-500">{errors.description}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary-lunar-green text-white font-bold py-2 hover:bg-primary-avacado transition"
            >
              Register
            </button>
            {successMessage && (
              <div className="mt-4 text-green-600">{successMessage}</div>
            )}
          </form>
        </div>
        <div className="hidden lg:block h-full">
          <img
            src={plantImage}
            alt="Plant"
            className="filter-custom-drop-shadow mix-blend-luminosity h-full absolute bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
