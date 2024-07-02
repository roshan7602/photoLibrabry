import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { ExapandablePanel } from "./Expandable";
import { useRemoveAlbumMutation } from "../store";
import PhotoList from "./PhotoList";

function AlbumListItem({album}) {
    const [removeAlbum, results] = useRemoveAlbumMutation();
    const handleremove = () =>{
        removeAlbum(album)
    };
    const header = <>
        <Button loading={results.isLoading} onClick={handleremove}><GoTrashcan/></Button>
        {album.title}</>;

    
        return <ExapandablePanel key={album.id} header={header}>
        <PhotoList album={album} />
        </ExapandablePanel>
}   

export default AlbumListItem;