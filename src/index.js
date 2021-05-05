module.exports = {
  http:{
    get(url){
      if (url.indexOf("profile") > 0 ){
        return {
          body:{
            name:'marco',
            dateOfBirth:'04/12/1989',
            contactNumber: '+61 453 234 2982',
            email: 'marcovalt@gmail.com'
          }
        }
      }
    }
  }
}
