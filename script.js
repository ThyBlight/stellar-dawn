const gearSearch = document.querySelector("[data-gear-search]");

if (gearSearch) {
  const rows = Array.from(document.querySelectorAll("[data-gear-row]"));

  gearSearch.addEventListener("input", () => {
    const query = gearSearch.value.trim().toLowerCase();

    rows.forEach((row) => {
      const text = row.textContent.toLowerCase();
      row.hidden = query.length > 0 && !text.includes(query);
    });
  });
}
