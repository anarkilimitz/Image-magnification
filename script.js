document.getElementById('myImage').addEventListener('click', function() {
    // Получаем текущее значение масштаба
    let currentScale = parseFloat(getComputedStyle(this).transform.split(',')[3]);
    
    if (!currentScale || isNaN(currentScale)) {
        currentScale = 1;
    }

    // Проверяем, превышен ли предел увеличения
    if (currentScale >= 2) {
        // Сбрасываем увеличение до начального состояния
        this.style.transform = 'scale(1)';
    } else {
        // Продолжаем увеличивать изображение
        this.style.transform = `scale(${currentScale + 1.5})`;
    }
});
