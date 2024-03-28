// import { useSearchParams } from "react-router-dom";
// import "./account_page.css";
// import { UserModel } from "../../models/UserModel";
// import { useEffect, useState } from "react";
// import { FacemashService } from "../../services/FacemashService";
// import { Avatar, Card, IconButton} from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import BorderColorIcon from "@mui/icons-material/BorderColor";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

// export default function AccountPage() {
//   // object ของ service
//   const service = new FacemashService();

//   // ใช้สำหรับดึงตัวแปลที่อยู่ใน path แต่จะเป็น array
//   const [searchParams] = useSearchParams();
//   // ดึง parameter ที่ชื่อว่า movieName ที่อยู่ใน path มาเป็บไว้ในตัวแปล movieName
//   const userUID = searchParams.get("userUID");
//   // user model
//   const [user, setUser] = useState<UserModel>();


//   // set การเปิด dialog แก้ไขข้อมูล
//   const [open, setOpen] = useState(false);
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };



//   async function selectUserByID() {
//     const userData: UserModel = await service.select_user_by_id("" + userUID);
//     console.log("user name is: " + userData?.name);
//     // setUser(userData);
//   }



//   //==========================================================================================
//   useEffect(() => {
//     // const callAPI = async () => {
//     //   const userData: UserModel = await service.select_user_by_id(''+userUID);
//     //   console.log('user name is: ' + userUID);
//     //   setUser(userData);
//     // };
//     // callAPI();
//   }, []);

//   // ===============================================================================================
//   return (
//     <>
//       <div className="account_page_body">

//         {/* =========================================== Avatar แสดงรูป */}
//         <div className="account_page_body_avatar">
//           <Avatar
//             alt="name..."
//             src="https://live.staticflickr.com/65535/52715000158_f090710c83_b.jpg"
//             sx={{
//               width: 250,
//               height: 250,
//               border: "5px ridge rgb(97, 82, 192, 1)",
//             }}
//           />
//           {/* ปุ่มแก้ไขรูปภาพ */}
//           <IconButton sx={{ marginTop: -4, transform: "rotate(10deg)" }}>
//             <EditIcon
//               sx={{ width: 60, height: 60 }}
//               className="account_page_body_avatar_btn_edit"
//             />
//           </IconButton>
//         </div>

//         {/*================================================================ แสดงส่วนของ ชื่อ email password photos... */}
//         <div className="account_page_body_cards">
//           {/*==============================================Name */}
//           <Card
//             sx={{ borderRadius: "50px" }}
//             className="account_page_body_card"
//           >
//             <h1 className="account_page_body_card_name">Name: {"amarin"}</h1>
//             <div className="account_page_body_card_btn_edit">
//               <IconButton sx={{ backgroundColor: "ButtonHighlight" }}>
//                 <BorderColorIcon
//                   sx={{ width: 30, height: 30 }}
//                   className="account_page_body_card_btn_edit_icon"
//                 />
//               </IconButton>
//             </div>
//           </Card>

//           {/* =============================================Email */}
//           <Card
//             sx={{ borderRadius: "50px" }}
//             className="account_page_body_card"
//           >
//             <h1 className="account_page_body_card_name">
//               Email: {"64011212108@msu.ac.th"}
//             </h1>
//             <div className="account_page_body_card_btn_edit">
//               <IconButton sx={{ backgroundColor: "ButtonHighlight" }}>
//                 <BorderColorIcon
//                   sx={{ width: 30, height: 30 }}
//                   className="account_page_body_card_btn_edit_icon"
//                 />
//               </IconButton>
//             </div>
//           </Card>

//           {/*=============================================== Password */}
//           <Card
//             sx={{ borderRadius: "50px" }}
//             className="account_page_body_card"
//           >
//             <h1 className="account_page_body_card_name">Password: {"123"}</h1>
//             <div className="account_page_body_card_btn_edit">
//               <IconButton sx={{ backgroundColor: "ButtonHighlight" }}>
//                 <BorderColorIcon
//                   sx={{ width: 30, height: 30 }}
//                   className="account_page_body_card_btn_edit_icon"
//                 />
//               </IconButton>
//             </div>
//           </Card>

//           {/*=============================================== go to Photos */}
//           <Card
//             sx={{ borderRadius: "50px" }}
//             className="account_page_body_card"
//           >
//             <h1 className="account_page_body_card_name">Photos: {"5"}</h1>
//             <div className="account_page_body_card_btn_edit">
//               <IconButton sx={{ backgroundColor: "ButtonHighlight" }}>
//                 <ArrowBackIosNewIcon
//                   sx={{ width: 30, height: 30 }}
//                   className="account_page_body_card_btn_edit_icon_gotophotos"
//                 />
//               </IconButton>
//             </div>
//           </Card>
//         </div>


//       </div>
//     </>
//   );
// }










// import { useSearchParams } from "react-router-dom";
import "./account_page.css";
import { UserModel } from "../../models/UserModel";
import { useEffect, useState, useRef } from "react";
import { FacemashService } from "../../services/FacemashService";
import { Avatar, Card, IconButton, TextField } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function AccountPage() {
  // object ของ service
  const service = new FacemashService();

  // ตัวดึงตัวค่ามาจาดตัวแปลใน path
  const [searchParams] = useSearchParams();

  // ดึง UID มาจาก path ที่ส่งมาจาด หน้า VotePage กับ AllUsersPage
  const uidFrom_VotePage_AllUsersPage = searchParams.get("UID"); //รับ PID

  // ใช้สำหรับดึงตัวแปลที่อยู่ใน path แต่จะเป็น array
  // const [searchParams] = useSearchParams();
  // ดึง parameter ที่ชื่อว่า movieName ที่อยู่ใน path มาเป็บไว้ในตัวแปล movieName
  // const userUID = searchParams.get("userUID");

  // user model
  const [user, setUser] = useState<UserModel>();
  // State สำหรับเก็บจำนวนรูปภาพของ User คนนั้นๆ
  const [count, setCount] = useState(0);

  //เก็บข้อมูล photoURL ที่เป็นรูปภาพออนไลน์
  const [photoURL, setPhotoURL] = useState<string>();

  
  const name = useRef<HTMLInputElement>();
  
  const image = useRef<HTMLInputElement>();

  const email = useRef<HTMLInputElement>();

  const password = useRef<HTMLInputElement>();

  const original_password = useRef<HTMLInputElement>();

  const confirm_password = useRef<HTMLInputElement>();

  const [checkImage, setCheckPassword] = useState<string>();

  const navigate = useNavigate();

  // ไปหน้าสำหรับเเสดงรูปภาพทั้งหมดของ User คนนั้นๆ
  function navigateToPhotos() {
    if (uidFrom_VotePage_AllUsersPage) {
      navigate("/Drawer/photos/?UID=" + uidFrom_VotePage_AllUsersPage);
    }
    else {
      navigate("/Drawer/photos");
    }
  }



  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        //console.log('ไฟล์ที่เลือก:', file);
        const responsePhotoURL = await service.uploadPhoto(file);
        setPhotoURL(responsePhotoURL);
    }
  }



  function navigateToAccountPage() {
    setUser(undefined);
    const loadDataAsync = async () => {
      //ทำการเช็คว่าผู้ใช้ต้องการเปลี่ยนรหัสผ่านหรือไม่
      if (checkImage === password.current?.value) {
        if (confirm("ยืนยันการอัปเดต")) {
          const response = await service.update_user_information(Number(user?.UID) , String(name.current?.value), String(photoURL), String(email.current?.value), String(password.current?.value));
          console.log(response);
          const userData = await service.select_user_by_id(Number(user?.UID));
          const obj = { 
            UID: userData?.UID,
            name: userData?.name,
            email: userData?.email,
            password: userData?.password,
            image: userData?.image,
            type: userData?.type
          };
          // ทำการเก็บข้อมูลของ User ลงบน localStorage เพื่อนำไปใช้งานต่อ
          localStorage.setItem("userObjStr", JSON.stringify(obj));
          navigate("/Drawer/account");
        }
      } else {
        if (original_password.current?.value) {
          if (user?.password === original_password.current?.value) {
            if (password.current?.value === confirm_password.current?.value) {
              if (confirm("ยืนยันการอัปเดต")) {
                const response = await service.update_user_information(Number(user?.UID) , String(name.current?.value), String(image.current?.value), String(email.current?.value), String(password.current?.value));
                console.log(response);

                const userData = await service.select_user_by_id(Number(user?.UID));
                const obj = { 
                  UID: userData?.UID,
                  name: userData?.name,
                  email: userData?.email,
                  password: userData?.password,
                  image: userData?.image,
                  type: userData?.type
                };
                // ทำการเก็บข้อมูลของ User ลงบน localStorage เพื่อนำไปใช้งานต่อ
                localStorage.setItem("userObjStr", JSON.stringify(obj));
                navigate("/Drawer/account");
              }
            } else {
              confirm("ยืนยันรหัสผ่านไม่ถูกต้อง");
            }
          } else {
            confirm("รหัสผ่านเดิมไม่ถูกต้อง");
          }
        } else {
          confirm("เมื่อคุณทำการเปลี่ยนรหัสผ่าน กรุณาใส่รหัสผ่านเดิมที่ช่อง(Original Password) เเละยืนยันรหัสผ่านใหม่ที่ช่อง(Confirm Password)");
        }
      }
    };
    loadDataAsync();
  }

  /*
  async function selectUserByID() {
    const userData: UserModel = await service.select_user_by_id(''+userUID);
    console.log('user name is: ' + userData?.name);
    // setUser(userData);
  }*/

  useEffect(() => {

    if (uidFrom_VotePage_AllUsersPage) {
        const loadDataAsync = async () => {
        const userData = await service.select_user_by_id(Number(uidFrom_VotePage_AllUsersPage));
        setUser(userData);

        const photoAnount = await service.countImage(Number(uidFrom_VotePage_AllUsersPage)); // ทำการเรียก service เพื่อนับจำนวนรูปภาพ
        setCount(photoAnount.count_image); //ทำการ set State เพื่อเก็บจำนวนรูปภาพของ User คนนั้นๆ
      };
      loadDataAsync();
    }
    else {
      // ดึงข้อมูลของ User จาก localStorage ที่ได้ Login ไว้มาใช้งานโดยดึงข้อมูลจาก key userObjStr
      const localStorageData = localStorage.getItem("userObjStr");
      if (localStorageData) {
        console.log(1);
        // ทำการเเปลงข้อมูลของ User ที่เป็น json string ไปเป็น object
        const userData = JSON.parse(localStorageData);
        const uid = userData.UID; // ทำการดึง UID ของ User ออกมาจาก localStorage เพื่อนำไปนับจำนวนรูปภาพของ User คนนั้นๆ
        setUser(userData); //ทำการเก็บข้อมูลของผู้ใช้ไว้เเสดงผล
        setCheckPassword(userData.password); //ทำการเก็บรหัสผ่านเดิมของ User ไว้เช็คกับการเปลี่ยนเเปลง

        const loadDataAsync = async () => {
          const photoAnount = await service.countImage(uid); // ทำการเรียก service เพื่อนับจำนวนรูปภาพ
          setCount(photoAnount.count_image); //ทำการ set State เพื่อเก็บจำนวนรูปภาพของ User คนนั้นๆ
        };
        loadDataAsync();
      }
    }
  }, [uidFrom_VotePage_AllUsersPage]);

  // ===============================================================================================
  return (
    <>
      <div className="account_page_body">
        {/* =========================================== Avatar แสดงรูป */}
        <div className="account_page_body_avatar">
          <Avatar
            alt="name..."
            src={user?.image || photoURL}
            sx={{
              width: 250,
              height: 250,
              border: "5px ridge rgb(97, 82, 192, 1)",
            }}
          />
        </div>

        {/*================================================================ แสดงส่วนของ ชื่อ email password photos... */}
        <div className="account_page_body_cards">
          {/*==============================================Name */}
          <Card
            sx={{
              borderRadius: "25px",
              width: "100%",
            }}
          >
            <TextField
              id="outlined-multiline-flexible"
              defaultValue={user?.name}
              multiline
              placeholder="name"
              maxRows={4}
              inputRef={name}
              sx={{ width: "100%", borderRadius: "25px" }}
            />
          </Card>
          <br />

            {
              (uidFrom_VotePage_AllUsersPage)
                ? null
                : <Card
                    sx={{
                      borderRadius: "25px",
                      width: "100%",
                    }}
                  >
                    <input type="file" alt="*" onChange={handleFileUpload}/>
                    {/* <TextField
                      id="outlined-multiline-flexible"
                      defaultValue={user?.image}
                      multiline
                      placeholder="image URL"
                      maxRows={4}
                      inputRef={image}
                      sx={{ width: "100%", borderRadius: "25px" }}
                    /> */}
                  </Card>
            }
          <br />

          {/* =============================================Email */}
          <Card
            sx={{
              borderRadius: "25px",
              width: "100%",
            }}
          >
            <TextField
              id="outlined-multiline-flexible"
              defaultValue={user?.email}
              multiline
              placeholder="email"
              maxRows={4}
              inputRef={email}
              sx={{ width: "100%", borderRadius: "25px" }}
            />
          </Card>
          <br />

          {/*=============================================== Password */}
            {
              (uidFrom_VotePage_AllUsersPage)
                ? null
                : <Card
                    sx={{
                      borderRadius: "25px",
                      width: "100%",
                    }}
                  >
                    <TextField
                      id="outlined-multiline-flexible"
                      placeholder="Original Password"
                      multiline
                      maxRows={4}
                      inputRef={original_password}
                      sx={{ width: "100%", borderRadius: "25px" }}
                    />
                  </Card>
            }
          <br />

            {
              (uidFrom_VotePage_AllUsersPage)
                ? null
                : <Card
                    sx={{
                      borderRadius: "25px",
                      width: "100%",
                    }}
                  >
                    <TextField
                      id="outlined-multiline-flexible"
                      defaultValue={user?.password}
                      multiline
                      maxRows={4}
                      inputRef={password}
                      sx={{ width: "100%", borderRadius: "25px" }}
                    />
                  </Card>
            }
          <br />

            {
              (uidFrom_VotePage_AllUsersPage)
                ? null
                : <Card
                    sx={{
                      borderRadius: "25px",
                      width: "100%",
                    }}
                  >
                    <TextField
                      id="outlined-multiline-flexible"
                      placeholder="Confirm Password"
                      multiline
                      maxRows={4}
                      inputRef={confirm_password}
                      sx={{ width: "100%", borderRadius: "25px" }}
                    />
                  </Card>
            }
          <br />

          {/*=============================================== go to Photos */}
          {
            (uidFrom_VotePage_AllUsersPage)
              ? <Card
                  sx={{ borderRadius: "50px" }}
                  className="account_page_body_card"
                >
                  <h1 className="account_page_body_card_name">Photos: {count}</h1>
                  <div className="account_page_body_card_btn_edit">
                    <IconButton
                      sx={{ backgroundColor: "ButtonHighlight" }}
                      onClick={() => navigateToPhotos()}
                    >
                      <ArrowBackIosNewIcon
                        sx={{ width: 30, height: 30 }}
                        className="account_page_body_card_btn_edit_icon_gotophotos"
                      />
                    </IconButton>
                  </div>
                </Card>
              : null
          }


          <div className="account_page_body_card_btn_edit">
            {
              // ถ้าผู้ใช้คนอื่นเอ้ามาดู profile เราเขาจะแก้ไขข้อมูลของเราไม่ได้
              (uidFrom_VotePage_AllUsersPage)
                ? null
                : <button
                  className="account_page_head_btnback"
                  onClick={() => navigateToAccountPage()}
                >
                  Save
                </button>
            }
          </div>
        </div>
      </div>
    </>
  );
}