<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ركن الألعاب - Loving Homes</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-gray-50 overflow-x-hidden">

    <nav class="bg-white shadow-md p-5 flex justify-between items-center px-10 sticky top-0 z-50">
        <h1 class="text-2xl font-bold text-burgundy">🐾 Loving Homes</h1>
        <div class="hidden md:flex space-x-reverse space-x-6 font-bold text-slate-600 items-center">
            <a href="index.html" class="hover:text-burgundy transition">الرئيسية</a>
            <a href="services.html" class="hover:text-burgundy transition">خدماتنا</a>
            <a href="packages.html" class="hover:text-burgundy transition">الباقات</a>
            <a href="clothes.html" class="hover:text-burgundy transition">الملابس</a>
            <a href="toys.html" class="text-burgundy border-b-2 border-burgundy pb-1">الألعاب</a>
            <button onclick="toggleCart()" class="relative bg-slate-100 p-2 rounded-full hover:bg-slate-200 transition">
                🛒 <span id="cart-count" class="absolute -top-1 -right-1 bg-burgundy text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">0</span>
            </button>
        </div>
    </nav>

    <header class="py-16 text-center bg-slate-800 text-white">
        <h2 class="text-4xl font-bold mb-4 italic">ركن المرح والمغامرة 🎾</h2>
        <p class="text-slate-300 max-w-2xl mx-auto px-4">مجموعة مختارة من الألعاب التفاعلية والذكية لضمان سعادة ونشاط أليفك.</p>
    </header>

    <main class="container mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div class="toy-card bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 flex flex-col">
                <img src="PinDown.io_@aliexpress_1773127696.jpg" class="w-full h-72 object-cover">
                <div class="p-6 text-center flex-grow flex flex-col">
                    <h3 class="text-xl font-bold mb-2">البطة الصفراء الناعمة</h3>
                    <p class="text-burgundy font-bold text-xl mt-auto mb-4">$9.00</p>
                    <button onclick="addToCart('البطة الصفراء', 9.00)" class="bg-burgundy text-white w-full py-3 rounded-xl font-bold hover:opacity-90 transition">إضافة للسلة +</button>
                </div>
            </div>
            </div>
    </main>

    <div id="cart-drawer" class="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[60] p-6 translate-x-full border-l-4 border-burgundy flex flex-col">
        <div class="flex justify-between items-center border-b pb-4 mb-4">
            <h3 class="text-xl font-bold text-burgundy">عربتك الملكية</h3>
            <button onclick="toggleCart()" class="text-slate-400 hover:text-red-600 text-2xl">✕</button>
        </div>
        <div id="cart-items" class="flex-grow overflow-y-auto py-2 flex flex-col gap-3">
            <p class="text-center text-slate-400 mt-10">السلة فارغة حالياً</p>
        </div>
        <div class="border-t pt-4 mt-4">
            <div class="flex justify-between text-xl font-bold mb-6">
                <span>الإجمالي:</span>
                <span id="total-price" class="text-burgundy">$0.00</span>
            </div>
            <button class="w-full bg-slate-800 text-white py-4 rounded-xl font-bold hover:bg-burgundy transition">إتمام الطلب</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>