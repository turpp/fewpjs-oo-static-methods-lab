class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^0-9a-z- ']/gi, '')
  }

  static titleize(string){
    let stringArr = string.split(' ')
    let newArr = stringArr.map(function(word){
    switch(word){
      case 'a':
        return 'a';
      case 'the':
        return 'the';
      case 'an':
        return 'an';
      case 'but':
        return 'but'
      case 'of':
        return 'of'
      case 'and':
        return 'and'
      case 'for':
        return 'for'
      case 'at':
        return 'at'
      case 'by':
        return 'by'
      case 'from':
        return 'from'
      default:
        return Formatter.capitalize(word)
    }  
    })
    console.log(newArr)
    newArr[0]=Formatter.capitalize(newArr[0])
    return newArr.join(' ')
  }
}