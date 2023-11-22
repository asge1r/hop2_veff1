class Categories {
	constructor() {
    this.apiUrl = 'https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/';
  }


  async getAllCategories() {
    try {
      const response = await fetch(this.apiUrl + "categories?limit=12");

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();

      const categories = responseData.items;
      console.log(categories)

      if(!Array.isArray(categories)){
        throw new Error('API response er ekki fylki')
      }

      this.displayCategories(categories);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  displayCategories(categories) {
    const voruflokkarDiv = document.querySelector('.voruflokkar');
  
    // Clear the container
    voruflokkarDiv.innerHTML = '';
  
    categories.forEach(category => {
      const categoryBox = document.createElement('a');
      categoryBox.href = '../sidur/voruflokkur.html?category_id=' + category.id; 
      categoryBox.classList.add('box');
      categoryBox.textContent = category.title;
  
      voruflokkarDiv.appendChild(categoryBox);
    });
  }
}
