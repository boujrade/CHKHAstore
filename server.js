const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// السماح بتقديم الملفات الثابتة (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// التعامل مع الطلبات إلى الصفحات المختلفة
app.get("/:page", (req, res) => {
    const page = req.params.page;
    res.sendFile(path.join(__dirname, "public", `${page}.html`));
});

// تشغيل السيرفر
app.listen(PORT, () => {
    console.log(`🚀 السيرفر يعمل على http://localhost:${PORT}`);
});

app.get("/products", async (req, res) => {
    const products = await db.collection("products").find().toArray();
    res.json(products);
});