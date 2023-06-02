// import React, { useState, useEffect } from "react";
// import Item from "../Item";
// import categoryAPI from "../../utils/API/categories";

// export default function Category() {
//   const [category, setCategories] = useState([]);

//   // Fetch categories data and update the categories state
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const fetchedCategories = await categoryAPI.getCategories();
//         console.log("Fetched categories:", fetchedCategories);
//         setCategories(fetchedCategories);
//       } catch (error) {
//         console.log("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <>
//     <select >
//     {categories.map((category) => (
//           <option key={category.name}> }
//     </select>
//     </>
//   )
// }
