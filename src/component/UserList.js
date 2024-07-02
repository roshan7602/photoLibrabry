 import { useEffect } from "react";
import { useSelector } from "react-redux";
import fetchUsers from "../store/thunks/fetchUsers";
import Skeleton from "./skeleton";
import adduser from "../store/thunks/addUser";
import Button from './Button'
import UserListItem from "./UserListItem";
import useThunk from "../hooks/use-thunk";




 function UserList(){
    const [dofecthUser, isLoadingUser, loadingUsersError] = useThunk(fetchUsers);
    
    const [doCreateUser, isCreatingUser, creatingUsersError]= useThunk(adduser)
   
    const {data} = useSelector((state)=> {
        return state.users;
    })

    useEffect(()=>{
        dofecthUser();
     }, [dofecthUser]);

    const handleUserAdd = ()=>{
        doCreateUser();
    }

    const renderedUsers = data.map((user) => 
            <UserListItem key={user.id} user={user} />
  );
    
      return (
        <div>
          <div className="flex flex-row justify-between items-center m-3">
            <h1 className="m-2 text-xl">Users</h1>
            {
            isCreatingUser ? 
            'creating User ..': 
            <Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add User</Button>
            }
            {creatingUsersError}
            
          </div>
          {isLoadingUser ? <Skeleton times={6} className='h-10 w-full'/>: renderedUsers}
          {loadingUsersError? <div>Error Fecting... data</div>:''}
        </div>
      );
    }

 export default UserList;