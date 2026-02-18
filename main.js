
function order(btn){
const card = btn.parentElement;
const name = card.dataset.name;
const link = card.dataset.link;
const message = `Salam, ${name} ilə maraqlanıram. Link: ${link}`;
window.open(`https://wa.me/994553920594?text=${encodeURIComponent(message)}`);
}
