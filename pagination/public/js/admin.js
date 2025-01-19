const deleteProduct = (btn) => {
  const prodId = btn.parentNode.queryselector("[name=productId]").value;
  const csrf = btn.parentNode.queryselector("[name=_csrf]").value;

  const productElement = btn.closest("article");

  fetch(`admin/product/${prodId}`, {
    method: "DELETE",
    headers: {
      "csrf-token": csrf,
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
      productElement.parentNode.removeChild(productElement);
    })
    .catch((error) => {
      console.log(error);
    });
};
