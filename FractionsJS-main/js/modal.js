const rules = document.querySelector(".main-page__rules-btn");
const modal = document.querySelector(".modal-container");
rules.addEventListener("click", () => {
   modal.classList.remove("hidden");
   modal.classList.add("active");
   window.addEventListener("click", (e) => {
      if (e.target === modal) {
         modal.classList.remove("active");
         modal.classList.add("inactive");
         setTimeout(function () {
            modal.classList.add("hidden");
            modal.classList.remove("inactive");
         }, 400);
      }
   });
});
