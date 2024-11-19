function searchFunction() {
    let input = document.getElementById('search').value.toLowerCase();
    let partners = document.getElementById('partners-list').getElementsByTagName('img');

    for (let i = 0; i < partners.length; i++) {
        let altText = partners[i].alt.toLowerCase();
        if (altText.includes(input)) {
            partners[i].style.display = "inline";
        } else {
            partners[i].style.display = "none";
        }
    }
}