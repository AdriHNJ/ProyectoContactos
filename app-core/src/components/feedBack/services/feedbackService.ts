import axios from 'axios'
import { UserModel } from 'shared-models'

import { NotifyType, showToast } from '../../../utils/sharedUitls'

export const feedBackCall = async (
  Body: string,
  FileData: string,
  user: UserModel,
) => {
  try {
    let url = `https://portaldespachosapi.azurewebsites.net/api/Feedback`
    const response = await axios.post(
      url,
      { Body, FileData },
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjMwQHJ1YW5vLmNvbSIsIm5iZiI6MTYzNDgzMDExOCwiZXhwIjoxNjY2MzY2MTE4LCJpYXQiOjE2MzQ4MzAxMTh9.Jx9fZbscVe2FpDjNhZroSCPPwZguXnLIPmJRfPMxxvc',
        },
      },
    )
    if (response.statusText == 'OK' && response.status == 200) {
      showToast('Reporte enviado correctamente', NotifyType.success, 5000)
    }
    return response
  } catch (err) {
    // Handle Error Here
    showToast('No se ha podido enviar el Reporte', NotifyType.error, 5000)
    //console.log(err);
    console.error(err)
  }
}
