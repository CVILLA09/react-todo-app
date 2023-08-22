import React from "react";
import { createRoot } from "react-dom/client"; // Corrected import path
import TodoApp from '@/components/TodoApp';
import '@/styles/app.css';

const domContainer = document.getElementById("root");
const root = createRoot(domContainer);
root.render(
    <React.StrictMode>
        <TodoApp />
    </React.StrictMode>
);
