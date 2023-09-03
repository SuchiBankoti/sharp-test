import { nanoid } from "@ant-design/pro-components";
import React, { useContext, useState } from "react";
import { dataContext } from "./ContextStore/Context";

export default function AddProduct() {
    const{addProduct}=useContext(dataContext)
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: 0,
        small: 0,
        medium: 0,
        large:0
    })
    const handleDataChange = (e) => {
        if (e.target.value < 0) {
            alert("please enter a positive value")
        } else {
            setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
        }
}
    return (
        <div>
            <form>
                <label>Name</label>
                <input name="name" type="text" value={formData.name} onChange={handleDataChange} />
                <label>Description</label>
                <input name="description" type="text" value={formData.description} onChange={handleDataChange} />
                <label>Price</label>
                <input name="price" type="number" value={formData.price} onChange={handleDataChange} />
                <label>Small</label>
                <input name="small"  type="number" value={formData.small} onChange={handleDataChange} />
                <label>Medium</label>
                <input name="medium" type="number" value={formData.medium} onChange={handleDataChange} />
                <label>Large</label>
                <input name="large" type="number" value={formData.large} onChange={handleDataChange} />
            </form>
            <button onClick={() => addProduct({ ...formData, id: nanoid() })}>Add Product</button>
        </div>
    )
}