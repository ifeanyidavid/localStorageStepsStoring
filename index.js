setTransaction(formData: any){

    console.log(formData);

    if (!localStorage.getItem('transaction')) {

        return localStorage.setItem('transaction', JSON.stringify(formData));

    }else{


        var trn = this.getTransactions(); // Get the object from the local storage.

        if(formData.company && formData.address){
          return localStorage.setItem('transaction', JSON.stringify(formData)); // Set the form data into the local storage.          
        }else{

          var mrgObj = Object.assign(formData, trn); // Merge the two objects (the form data and the object from the local storage)
          
          return localStorage.setItem('transaction', JSON.stringify(mrgObj)); // Set the form data into the local storage.
          

        }
        
    }
