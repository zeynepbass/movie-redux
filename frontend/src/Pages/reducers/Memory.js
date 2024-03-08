const INITIAL_STATE={
    yaziListesi:[],

};
 const Memory = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case 'YAZI_LISTESI_GETIR':
        return {...state,yaziListesi:action.payload}
        case 'MEMORY_EKLE':
        return {...state, yaziListesi:[...state.yaziListesi, action.payload] }
           case 'MEMORY_SIL':
           return {...state, yaziListesi:state.yaziListesi.filter((memory)=>memory._id !== action.payload)} 
            break; 
            case 'MEMORY_UPDATE"':

                    // Güncellenmiş yazının id'sini alın
                    const updatedYaziId = action.payload._id;
                    // Güncellenmiş yazının diğer bilgilerini alın
                    const updatedYazi = action.payload;
                    // Güncellenmiş yazıyı eklemek için yeni bir yaziListesi dizisi oluşturun
                    const yeniYaziListesi = state.yaziListesi.map(yazi => {
                      // Güncellenmiş yazının id'si mevcut yazi ile eşleşiyorsa, güncellenmiş yazıyı döndürün
                      if (yazi._id === updatedYaziId) {
                        return {...state, yaziListesi:[...state.yaziListesi, updatedYazi] }
                      }
                      else {
                  return state;
                      }
               
                    });
               
                  
    
        default:
            return state;
    }
};
export default Memory;