import { nanoid } from "@ant-design/pro-components";
import React, { useContext, useState } from "react";
import { dataContext } from "./ContextStore/Context";

export default function AddProduct() {
    const{addProduct}=useContext(dataContext)
    // get add product function from redux store which add form dtaat to crud crud and upate product state which calls useefefct to fetch daat from crud crid
    const [formData, setFormData] = useState({
        id:nanoid(),
        name: "",
        description: "",
        price: 0,
        small: 0,
        medium: 0,
        large:0
    })
    const handleDataChange = (e) => {
    setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
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
            <button onClick={()=>addProduct(formData)}>Add Product</button>
        </div>
    )
}