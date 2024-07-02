import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { deleteUser } from "../store";
import useThunk from "../hooks/use-thunk";
import { ExapandablePanel } from "./Expandable";
import AlbumList from "./AlbumList";

function UserListItem ({user, rest}) {

    const [deRemmoveUser, isLoading, error] = useThunk(deleteUser);
    const handleClick = () =>{
        deRemmoveUser(user);
    }

    const header =  <>
        <Button className="mr-3" loading={isLoading} onClick={handleClick}>
                <GoTrashcan/>
            </Button>
        {error && <div>Error Deleing</div>}
        {user.name}     
    </>;

    return (
        <ExapandablePanel header={header}>
            <AlbumList user={user} />
        </ExapandablePanel>
    )
    
}

export default UserListItem;