// ====== Configuration ======
const DEFAULT_DELIVERY_FEE = "Delivery fee to apply after checkout"; 
const WHATSAPP_NUMBER = "2348086658180"; 

// ====== Delivery fee display logic ======
document.addEventListener('DOMContentLoaded', function () {
  const modeEl = document.getElementById('mode');
  const deliveryFeeEl = document.getElementById('deliveryFee');

  function updateDeliveryFee(){
    const mode = modeEl.value;
    if(mode === 'delivery'){
      deliveryFeeEl.textContent = '' + DEFAULT_DELIVERY_FEE.toLocaleString();
    } else {
      deliveryFeeEl.textContent = '₦0';
    }
  }

  if (modeEl && deliveryFeeEl) {
    modeEl.addEventListener('change', updateDeliveryFee);
    updateDeliveryFee();
  }

  // ====== WhatsApp prefill ======
  const sendWhatsAppBtn = document.getElementById('sendWhatsApp');
  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', function(){
      const name = encodeURIComponent(document.getElementById('customerName').value || 'Customer');
      const phone = encodeURIComponent(document.getElementById('phone').value || '');
      const item = encodeURIComponent(document.getElementById('item').value || '');
      const date = encodeURIComponent(document.getElementById('date').value || '');
      const time = encodeURIComponent(document.getElementById('time').value || '');
      const mode = encodeURIComponent(document.getElementById('mode').value || '');
      const address = encodeURIComponent(document.getElementById('address').value || '');
      const notes = encodeURIComponent(document.getElementById('notes').value || '');
      const fee = (mode === 'delivery') ? DEFAULT_DELIVERY_FEE : 0;

      let message = `Hello Bake with Crystal,%0A%0AMy name: ${name}%0APhone number: ${phone}%0AMy order: ${item}%0ADelivery date/time: ${date} / ${time}%0APickup/Delivery: ${mode}%0AAddress: ${address}%0ANotes: ${notes}%0A%0AThank you.`;
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
      window.open(url, '_blank');
    });
  }

  // // ====== Netlify form success handling (optional) ======
  // const form = document.getElementById('orderForm');
  // if (form) {
  //   form.addEventListener('submit', function(e){
  //     // Let Netlify handle the submission; show a quick alert
  //     setTimeout(()=>{ alert('Order submitted. We will contact you to confirm and request deposit.'); }, 300);
  //   });
  // }
});
document.getElementById("year").textContent = new Date().getFullYear();
