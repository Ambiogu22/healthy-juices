import React from "react";
import Juice from "./Juice";


const Home = () => {
    return (
        <div>
            <Juice 
            juiceName="Green Juice" 
            juiceDescription="Our aim is to seamlessly integrate into your daily routine, offering time-saving solutions while prioritizing your well-being. Our products are designed to combat inflammation, detoxify, and cleanse your body and skin, ensuring you feel rejuvenated and refreshed each day." 
            image="https://plus.unsplash.com/premium_photo-1700084621328-8c17e915a42a?q=80&w=2121&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imgAlt="Green Juice Image"
            />
            <Juice 
            juiceName="Orange Juice"
            juiceDescription="This substance is a powerful antioxidant and a source of vitamin C, fiber, and potassium. It also provides magnesium, phosphorus, and a small amount of calcium. Additionally, it helps normalize high blood cholesterol levels."
            image="https://media.istockphoto.com/id/461122149/photo/glass-of-fresh-fruit-and-vegetable-juice.jpg?s=2048x2048&w=is&k=20&c=Y6ER_O02EYNbCN4KMdAAEx2OEIfcQRZhlPWlMk3saNs="
            imgAlt="Orange Juice Image"
            />
            <Juice 
            juiceName="Red Juice"
            juiceDescription="This substance is a powerful antioxidant and a source of vitamin C, fiber, and potassium. It also provides magnesium, phosphorus, and a small amount of calcium. Additionally, it helps normalize high blood cholesterol levels."
            image="https://media.istockphoto.com/id/461122149/photo/glass-of-fresh-fruit-and-vegetable-juice.jpg?s=2048x2048&w=is&k=20&c=Y6ER_O02EYNbCN4KMdAAEx2OEIfcQRZhlPWlMk3saNs="
            imgAlt="Orange Juice Image"
            />
        </div>
        
    );
}

export default Home;