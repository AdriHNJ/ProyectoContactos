import { useState, useEffect } from "react";

export default function useFriendStatus(friendID: number) {
  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    //console.log("por useEffect" + friendID);
  }, [isOnline]);

  //if (friendID == 1) setIsOnline(true);
  if (friendID == 1 && isOnline){
        setIsOnline(false);
    }else if(friendID != 1 && !isOnline) setIsOnline(true);
  return isOnline;
}


// export const useFriendStatus = (friendID:number) => {
//     const [isShown, setIsShown] = useState<boolean>(false);
//     //if (friendID == 1) setIsShown(true);
//     return isShown
//   }