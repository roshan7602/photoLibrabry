import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./skeleton";
import Button from "./Button";
import AlbumListItem from "./AlbumsListItem";

function AlbumList ({user}) {

    const {data, error, isFetching} = useFetchAlbumsQuery(user);
    const [addAlbum, result] = useAddAlbumMutation();

    const handleaddAlbum = () => {
        addAlbum(user);
    }
    let content;
    if(isFetching) {
        content = <Skeleton className="h-10 w-full" times={3} />
    } else if (error) {
        content = <div>Error loading albums</div>
    } else {
        content  = data.map(album => 
            <AlbumListItem key={album.id} album={album} />
        )
    }

    return <div>
        <div className="m-2 flex flex-row item-center justify-between">
            <h3 className="text-lg font-bold">Album By {user.name}</h3>
            <Button loading={result.isLoading} onClick={handleaddAlbum}>
                + Add Albums
            </Button>
        </div>
        <div>{content}</div>
        </div>
}

export default AlbumList;