document.addEventListener('click', (e) => {
    const addBasketModalBtn = e.target.closest('[data-add-basket-modal-btn]');

    if (addBasketModalBtn) {
        document.querySelector('[data-modal-wrapper]').style['display'] = 'none';
        document.querySelector('[data-add-basket-modal]').style['display'] = 'none';
    }
})


document.addEventListener('click', (e) => {
    const buttonSubmit = e.target.closest('[data-submit-your-application-modal-form-button-submit]');

    if (buttonSubmit) {
        document.querySelector('[data-modal-wrapper]').style['display'] = 'none';
        document.querySelector('[data-submit-your-application-modal]').style['display'] = 'none';
    }
})