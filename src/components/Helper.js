import axios from 'axios';

export const  download = (result) => {
    
        axios({
          url: result,
          method: 'GET',
          responseType: 'blob'
    })
      .then((response) => {
            const url = window.URL
                  .createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'image.jpg');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
      })
}
