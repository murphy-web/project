// ===== ДАННЫЕ ДЛЯ ТАБЛИЦЫ СТИЛЕЙ =====
const tattooStyles = [
    {
        id: 1,
        name: "Реализм",
        icon: "fas fa-eye",
        color: "#e74c3c",
        pricePer10cm: "12 000 - 25 000 ₽",
        avgTime: "10-20",
        avgAge: "28-40",
        rating: 9.8,
        reviews: 324
    },
    {
        id: 2,
        name: "Нео-традишнл",
        icon: "fas fa-feather-alt",
        color: "#3498db",
        pricePer10cm: "8 000 - 15 000 ₽",
        avgTime: "6-12",
        avgAge: "22-35",
        rating: 9.6,
        reviews: 287
    },
    {
        id: 3,
        name: "Минимализм",
        icon: "fas fa-bezier-curve",
        color: "#2ecc71",
        pricePer10cm: "4 000 - 8 000 ₽",
        avgTime: "2-5",
        avgAge: "18-30",
        rating: 9.3,
        reviews: 512
    },
    {
        id: 4,
        name: "Графика/Лайнворк",
        icon: "fas fa-drafting-compass",
        color: "#9b59b6",
        pricePer10cm: "7 000 - 12 000 ₽",
        avgTime: "5-10",
        avgAge: "20-32",
        rating: 9.5,
        reviews: 234
    },
    {
        id: 5,
        name: "Японский (Иредзуми)",
        icon: "fas fa-dragon",
        color: "#e67e22",
        pricePer10cm: "15 000 - 30 000 ₽",
        avgTime: "15-30",
        avgAge: "30-50",
        rating: 9.9,
        reviews: 156
    },
    {
        id: 6,
        name: "Трайбл",
        icon: "fas fa-mountain",
        color: "#1abc9c",
        pricePer10cm: "6 000 - 10 000 ₽",
        avgTime: "4-8",
        avgAge: "25-40",
        rating: 9.2,
        reviews: 189
    },
    {
        id: 7,
        name: "Акварель",
        icon: "fas fa-paint-brush",
        color: "#e84393",
        pricePer10cm: "10 000 - 18 000 ₽",
        avgTime: "8-15",
        avgAge: "20-35",
        rating: 9.4,
        reviews: 278
    },
    {
        id: 8,
        name: "Блэкворк/Дотворк",
        icon: "fas fa-circle",
        color: "#2c3e50",
        pricePer10cm: "9 000 - 16 000 ₽",
        avgTime: "8-14",
        avgAge: "23-38",
        rating: 9.7,
        reviews: 192
    }
];

// ===== ДАННЫЕ ДЛЯ ГАЛЕРЕИ =====
const galleryData = [
    {
        id: 1,
        image: "арктикволк.jpg",
        style: "Реализм",
        title: "Арктический волк",
        size: "25×40 см",
        hours: 22,
        artist: "Анна Волкова",
        price: "45 000 ₽",
        rating: 9.9
    },
    {
        id: 2,
        image: "феникс.jpg",
        style: "Японский (Иредзуми)",
        title: "Дракон & Феникс",
        size: "35×50 см",
        hours: 38,
        artist: "Хироши Танака",
        price: "85 000 ₽",
        rating: 9.8
    },
    {
        id: 3,
        image: "пантера.jpg",
        style: "Нео-традишнл",
        title: "Цветочная пантера",
        size: "20×30 см",
        hours: 15,
        artist: "Максим Орлов",
        price: "28 000 ₽",
        rating: 9.7
    },
    {
        id: 4,
        image: "колибри.jpg",
        style: "Акварель",
        title: "Колибри в полете",
        size: "18×25 см",
        hours: 12,
        artist: "Екатерина Смирнова",
        price: "22 000 ₽",
        rating: 9.6
    },
    {
        id: 5,
        image: "геометрия.jpg",
        style: "Блэкворк/Дотворк",
        title: "Сакральная геометрия",
        size: "30×30 см",
        hours: 16,
        artist: "Сергей Петров",
        price: "32 000 ₽",
        rating: 9.8
    },
    {
        id: 6,
        image: "луна.jpg",
        style: "Минимализм",
        title: "Лунный цикл",
        size: "15×20 см",
        hours: 5,
        artist: "Алиса Козлова",
        price: "9 500 ₽",
        rating: 9.4
    },
    {
        id: 7,
        image: "череп.jpg",
        style: "Графика/Лайнворк",
        title: "Анатомический череп",
        size: "20×25 см",
        hours: 10,
        artist: "Дмитрий Иванов",
        price: "18 000 ₽",
        rating: 9.5
    },
    {
        id: 8,
        image: "рукав.jpg",
        style: "Трайбл",
        title: "Полинезийский рукав",
        size: "15×45 см",
        hours: 25,
        artist: "Ольга Сидорова",
        price: "42 000 ₽",
        rating: 9.6
    }
];

// ===== ЦЕНЫ ДЛЯ КАЛЬКУЛЯТОРА =====
const stylePrices = {
    "Реализм": { min: 12000, max: 25000, base: 18500 },
    "Нео-традишнл": { min: 8000, max: 15000, base: 11500 },
    "Минимализм": { min: 4000, max: 8000, base: 6000 },
    "Графика/Лайнворк": { min: 7000, max: 12000, base: 9500 },
    "Японский (Иредзуми)": { min: 15000, max: 30000, base: 22500 },
    "Трайбл": { min: 6000, max: 10000, base: 8000 },
    "Акварель": { min: 10000, max: 18000, base: 14000 },
    "Блэкворк/Дотворк": { min: 9000, max: 16000, base: 12500 }
};

// ===== DOM ЭЛЕМЕНТЫ =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const contactBtnDesktop = document.getElementById('contact-btn-desktop');
const contactBtnMobile = document.getElementById('contact-btn-mobile');
const bookingForm = document.getElementById('booking-form');
const submitBtn = document.getElementById('submit-btn');
const formSpinner = document.getElementById('form-spinner');
const formMessage = document.getElementById('form-message');
const calculateBtn = document.getElementById('calculate-btn');

// ===== ЗАГРУЗКА ТАБЛИЦЫ СТИЛЕЙ =====
function loadStylesTable() {
    const tableBody = document.getElementById('styles-table-body');
    
    tattooStyles.forEach(style => {
        const row = document.createElement('tr');
        
        const stars = generateStars(style.rating);
        
        row.innerHTML = `
            <td>
                <div class="style-name">
                    <div class="style-icon" style="background-color: ${style.color}">
                        <i class="${style.icon}"></i>
                    </div>
                    ${style.name}
                </div>
            </td>
            <td class="price">${style.pricePer10cm}</td>
            <td class="time">${style.avgTime} <span>часов</span></td>
            <td class="age">${style.avgAge} лет</td>
            <td>
                <div class="rating">
                    <div class="rating-stars">${stars}</div>
                    <div>
                        <div class="rating-value">${style.rating}</div>
                        <div class="rating-count">${style.reviews} отзывов</div>
                    </div>
                </div>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// ===== ЗАГРУЗКА ГАЛЕРЕИ =====
function loadGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    
    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.id = item.id;
        
        // ВАША РАЗМЕТКА ВСТАВЛЕНА ЗДЕСЬ
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="gallery-info">
                <div class="gallery-style">${item.style}</div>
                <h3 class="gallery-title">${item.title}</h3>
                <div class="gallery-details">
                    <span><i class="fas fa-ruler"></i> ${item.size}</span>
                    <span><i class="fas fa-clock"></i> ${item.hours}ч</span>
                    <span><i class="fas fa-user"></i> ${item.artist}</span>
                </div>
                <div class="gallery-price-rating">
                    <span class="gallery-price">${item.price}</span>
                    <span class="gallery-rating">
                        <i class="fas fa-star"></i> ${item.rating}
                    </span>
                </div>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => {
            openGalleryModal(item);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

// ===== МОДАЛЬНОЕ ОКНО ГАЛЕРЕИ =====
function openGalleryModal(item) {
    const modal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDetails = document.getElementById('modal-details');
    const modalPrice = document.getElementById('modal-price');
    const modalRating = document.getElementById('modal-rating');
    
    modalImage.src = item.image;
    modalImage.alt = item.title;
    modalTitle.textContent = item.title;
    modalPrice.textContent = item.price;
    modalRating.textContent = item.rating;
    
    modalDetails.innerHTML = `
        <div class="modal-detail-item">
            <div class="modal-detail-label">Стиль</div>
            <div class="modal-detail-value">${item.style}</div>
        </div>
        <div class="modal-detail-item">
            <div class="modal-detail-label">Размер</div>
            <div class="modal-detail-value">${item.size}</div>
        </div>
        <div class="modal-detail-item">
            <div class="modal-detail-label">Время работы</div>
            <div class="modal-detail-value">${item.hours} часов</div>
        </div>
        <div class="modal-detail-item">
            <div class="modal-detail-label">Мастер</div>
            <div class="modal-detail-value">${item.artist}</div>
        </div>
    `;
    
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }, 10);
    
    // Обработчик закрытия
    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    };
    
    // Закрытие по кнопке
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.onclick = closeModal;
    
    // Закрытие по клику вне окна
    modal.onclick = (e) => {
        if (e.target === modal) {
            closeModal();
        }
    };
    
    // Закрытие по Escape
    document.onkeydown = (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    };
}

// ===== ИНИЦИАЛИЗАЦИЯ КАЛЬКУЛЯТОРА =====
function initCalculator() {
    // Заполняем выпадающие списки стилями
    const styleSelects = [
        document.getElementById('tattoo-style'),
        document.getElementById('service')
    ];
    
    styleSelects.forEach(select => {
        if (select) {
            tattooStyles.forEach(style => {
                const option = document.createElement('option');
                option.value = style.name;
                option.textContent = style.name;
                select.appendChild(option);
            });
        }
    });
    
    // Обновление отображения размера
    const sizeSlider = document.getElementById('tattoo-size');
    const sizeValue = document.getElementById('size-value');
    
    sizeSlider.addEventListener('input', () => {
        sizeValue.textContent = `${sizeSlider.value} см²`;
    });
    
    // Обработчики для расчета
    const calculatorInputs = [
        sizeSlider,
        document.getElementById('tattoo-style'),
        document.getElementById('complexity'),
        document.getElementById('artist-level'),
        ...document.querySelectorAll('input[name="color"]'),
        ...document.querySelectorAll('input[type="checkbox"]')
    ];
    
    calculatorInputs.forEach(input => {
        if (input) {
            input.addEventListener('change', calculateCost);
        }
    });
    
    // Кнопка расчета
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateCost);
    }
    
    // Первоначальный расчет
    calculateCost();
}

// ===== РАСЧЕТ СТОИМОСТИ =====
function calculateCost() {
    const selectedStyle = document.getElementById('tattoo-style').value;
    const size = parseInt(document.getElementById('tattoo-size').value);
    const complexity = parseFloat(document.getElementById('complexity').value);
    const artistLevel = parseFloat(document.getElementById('artist-level').value);
    const isColor = document.querySelector('input[name="color"]:checked').value === 'color';
    
    // Получаем базовую стоимость для выбранного стиля
    let basePrice = 0;
    if (selectedStyle && stylePrices[selectedStyle]) {
        basePrice = stylePrices[selectedStyle].base;
    }
    
    // Рассчитываем стоимость за размер (базовая цена за 10 см²)
    let sizeCost = (basePrice / 10) * size;
    
    // Применяем множитель сложности
    sizeCost *= complexity;
    
    // Применяем множитель уровня мастера
    sizeCost *= artistLevel;
    
    // Добавляем наценку за цвет (30% к стоимости)
    if (isColor) {
        sizeCost *= 1.3;
    }
    
    // Добавляем дополнительные опции
    let additionalCost = 0;
    const additionalOptions = [];
    
    // Проверяем чекбоксы
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        const value = parseFloat(checkbox.value);
        
        if (checkbox.name === 'coverup' || checkbox.name === 'correction' || checkbox.name === 'express') {
            // Процентные множители
            sizeCost *= value;
            additionalOptions.push({
                name: getOptionName(checkbox.name),
                value: `${(value - 1) * 100}%`
            });
        } else {
            // Фиксированные суммы
            additionalCost += value;
            additionalOptions.push({
                name: getOptionName(checkbox.name),
                value: `+${formatPrice(value)}`
            });
        }
    });
    
    // Итоговая стоимость
    let totalCost = Math.round(sizeCost + additionalCost);
    
    // Отображаем результат
    document.getElementById('total-cost').textContent = formatPrice(totalCost);
    
    // Показываем детализацию
    showPriceBreakdown(basePrice, size, complexity, artistLevel, isColor, additionalOptions, totalCost);
}

function getOptionName(checkboxName) {
    const names = {
        'coverup': 'Перекрытие старой тату',
        'correction': 'Коррекция существующей',
        'express': 'Срочный заказ',
        'design': 'Индивидуальный эскиз',
        'aftercare': 'Набор по уходу'
    };
    return names[checkboxName] || checkboxName;
}

function showPriceBreakdown(basePrice, size, complexity, artistLevel, isColor, additionalOptions, totalCost) {
    const breakdown = document.getElementById('price-breakdown');
    
    let html = `
        <div class="breakdown-item">
            <span class="breakdown-label">Базовая стоимость (${size} см²):</span>
            <span class="breakdown-value">${formatPrice(Math.round((basePrice / 10) * size))}</span>
        </div>
    `;
    
    if (complexity !== 1) {
        const complexityNames = {
            '1': 'Простая',
            '1.2': 'Средняя',
            '1.5': 'Высокая',
            '2': 'Экстремальная'
        };
        html += `
            <div class="breakdown-item">
                <span class="breakdown-label">Сложность (${complexityNames[complexity]}):</span>
                <span class="breakdown-value">×${complexity}</span>
            </div>
        `;
    }
    
    if (artistLevel !== 1) {
        const levelNames = {
            '1': 'Начинающий',
            '1.5': 'Опытный',
            '2': 'Профессионал',
            '3': 'Топ-мастер'
        };
        html += `
            <div class="breakdown-item">
                <span class="breakdown-label">Уровень мастера (${levelNames[artistLevel]}):</span>
                <span class="breakdown-value">×${artistLevel}</span>
            </div>
        `;
    }
    
    if (isColor) {
        html += `
            <div class="breakdown-item">
                <span class="breakdown-label">Цветная татуировка:</span>
                <span class="breakdown-value">+30%</span>
            </div>
        `;
    }
    
    additionalOptions.forEach(option => {
        html += `
            <div class="breakdown-item">
                <span class="breakdown-label">${option.name}:</span>
                <span class="breakdown-value">${option.value}</span>
            </div>
        `;
    });
    
    html += `
        <div class="breakdown-item">
            <span class="breakdown-label">Итоговая стоимость:</span>
            <span class="breakdown-value">${formatPrice(totalCost)}</span>
        </div>
    `;
    
    breakdown.innerHTML = html;
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
}

// ===== ФОРМА ЗАПИСИ =====
function initBookingForm() {
    // Установка минимальной даты (завтра)
    const dateInput = document.getElementById('date');
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
    
    // Маска для телефона
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 0) {
            if (value.length <= 3) {
                value = `+7 (${value}`;
            } else if (value.length <= 6) {
                value = `+7 (${value.slice(1, 4)}) ${value.slice(4)}`;
            } else if (value.length <= 8) {
                value = `+7 (${value.slice(1, 4)}) ${value.slice(4, 7)}-${value.slice(7)}`;
            } else {
                value = `+7 (${value.slice(1, 4)}) ${value.slice(4, 7)}-${value.slice(7, 9)}-${value.slice(9, 11)}`;
            }
        }
        
        e.target.value = value;
    });
    
    // Отправка формы
    bookingForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Валидация формы
        if (!validateForm()) {
            return;
        }
        
        // Показываем спиннер и блокируем кнопку
        submitBtn.disabled = true;
        formSpinner.classList.remove('hidden');
        const originalText = submitBtn.querySelector('.btn-text').textContent;
        submitBtn.querySelector('.btn-text').textContent = 'Отправка...';
        
        // Собираем данные формы
        const formData = new FormData(bookingForm);
        const data = Object.fromEntries(formData);
        
        try {
            // Здесь должен быть ваш реальный endpoint
            const response = await fetch('https://formspree.io/f/your-form-id', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                // Успешная отправка
                showFormMessage('Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.', 'success');
                bookingForm.reset();
                
                // Сохраняем данные в LocalStorage
                saveFormData(data);
            } else {
                throw new Error('Ошибка при отправке формы');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            showFormMessage('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.', 'error');
        } finally {
            // Восстанавливаем кнопку
            submitBtn.disabled = false;
            formSpinner.classList.add('hidden');
            submitBtn.querySelector('.btn-text').textContent = originalText;
        }
    });
    
    // Загрузка сохраненных данных
    loadFormData();
}

function validateForm() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const dateInput = document.getElementById('date');
    const agreementCheckbox = document.getElementById('agreement');
    
    let isValid = true;
    
    // Сбрасываем предыдущие ошибки
    clearFormErrors();
    
    // Проверка имени
    if (!nameInput.value.trim()) {
        showFieldError(nameInput, 'Пожалуйста, введите ваше имя');
        isValid = false;
    }
    
    // Проверка телефона
    const phoneRegex = /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        showFieldError(phoneInput, 'Пожалуйста, введите корректный номер телефона');
        isValid = false;
    }
    
    // Проверка даты
    if (!dateInput.value) {
        showFieldError(dateInput, 'Пожалуйста, выберите дату');
        isValid = false;
    }
    
    // Проверка согласия
    if (!agreementCheckbox.checked) {
        showFieldError(agreementCheckbox, 'Необходимо согласие на обработку данных');
        isValid = false;
    }
    
    return isValid;
}

function showFieldError(field, message) {
    const formGroup = field.closest('.form-group');
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.color = '#e74c3c';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
    
    formGroup.appendChild(errorElement);
    field.style.borderColor = '#e74c3c';
}

function clearFormErrors() {
    const errors = document.querySelectorAll('.field-error');
    errors.forEach(error => error.remove());
    
    const inputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    inputs.forEach(input => {
        input.style.borderColor = '';
    });
}

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Автоматическое скрытие сообщения через 5 секунд
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }, 5000);
}

// ===== LOCALSTORAGE =====
function saveFormData(data) {
    try {
        localStorage.setItem('lastBookingData', JSON.stringify(data));
    } catch (error) {
        console.error('Ошибка при сохранении в LocalStorage:', error);
    }
}

function loadFormData() {
    try {
        const savedData = localStorage.getItem('lastBookingData');
        if (savedData) {
            const data = JSON.parse(savedData);
            
            // Заполняем поля формы
            document.getElementById('name').value = data.name || '';
            document.getElementById('phone').value = data.phone || '';
            document.getElementById('email').value = data.email || '';
            document.getElementById('service').value = data.service || '';
            
            // Для даты проверяем, что она не устарела
            if (data.date) {
                const savedDate = new Date(data.date);
                const today = new Date();
                if (savedDate > today) {
                    document.getElementById('date').value = data.date;
                }
            }
            
            document.getElementById('message').value = data.message || '';
            document.getElementById('agreement').checked = data.agreement === 'on';
        }
    } catch (error) {
        console.error('Ошибка при загрузке из LocalStorage:', error);
    }
}

// ===== МОБИЛЬНОЕ МЕНЮ =====
function initMobileMenu() {
    // Открытие/закрытие меню
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    closeMenu.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Закрытие меню при клике на ссылку
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ===== КНОПКИ "СВЯЗЬ С НАМИ" =====
function initContactButtons() {
    const contactButtons = [contactBtnDesktop, contactBtnMobile];
    
    contactButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                // Прокрутка к форме
                document.getElementById('contact').scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Закрытие мобильного меню если оно открыто
                if (mobileMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    });
}

// ===== ПЛАВНАЯ ПРОКРУТКА =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ =====
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    loadStylesTable();
    loadGallery();
    initCalculator();
    initBookingForm();
    initContactButtons();
    initSmoothScroll();
});