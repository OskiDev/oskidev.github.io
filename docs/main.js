const filters = document.querySelectorAll('.filter');
const cells = document.querySelectorAll('.cell');

filters.forEach(f => {
    f.addEventListener('click', () => {
        filters.forEach(x => x.classList.remove('active'));
        f.classList.add('active');

        const ActiveFilter = f.dataset.filter
        
        cells.forEach(c => {
            const tags = c.dataset.tags || '';
            const show = ActiveFilter === 'all' || tags.includes(ActiveFilter);
            c.style.visibility = show ? 'visible' : 'hidden';
            c.style.display = show ? 'flex' : 'none';
            c.style.opacity = show ? '1' : '0';
        });
    });
});

const images = document.querySelectorAll('.cell-thumb')

images.forEach(image => {
    image.addEventListener("mousemove", function(event) {
        ParallaxHover(event, image);
    });
})

images.forEach(image => {
    image.addEventListener("mouseleave", () => {
        image.style.transform = 'translate(0, 0)'
    })
})

function ParallaxHover(e, image) {
    const ImageRect = image.getBoundingClientRect();
    const ImageCenterX = ImageRect.left + ImageRect.width / 2;
    const ImageCenterY = ImageRect.top + ImageRect.height / 2;
    const amountMovedX = (e.clientX - ImageCenterX) * -0.05
    const amountMovedY = (e.clientY - ImageCenterY) * -0.05
    image.style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
}