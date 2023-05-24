const SERVER = 'http://localhost:3000/api';

class Model {
    // Fetch list of giveaways
    static fetch(route) {
      return fetch(SERVER + route)
          .then(response => response.json())
          .then(result => { return result; })
          .catch(error => {
            console.error('Error:', error);
            throw error;
          });
    }

    // Post contact message
    static async message(formData) {
      try {
        // Include csrfToken from Laravel to pass csrf verification
        const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
        const updatedFormData = {
          ...formData,
          _token: csrfToken
        }

        const response = await fetch(SERVER + '/contact', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(updatedFormData),
        });
        if (!response.ok) { throw new Error('Form submission failed.'); }
  
        const data = await response.json();
        return data;
      } catch (error) { throw new Error('An error occurred while submitting the form.'); }
    }
  }
  
  export default Model;