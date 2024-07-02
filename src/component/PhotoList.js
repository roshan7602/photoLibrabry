import PhotoListItem from './PhotoListItem'
import { useAddPhotoMutation, useFetchPhotosQuery } from '../store';
import Button from './Button';
import Skeleton from './skeleton';

function PhotoList({album}) {
    useFetchPhotosQuery(album)
    const {data, isFetching, error} = useFetchPhotosQuery(album)
    const [addPhoto, addPhotoresult] = useAddPhotoMutation()

    const handleAddPhoto =() =>{
        addPhoto(album)
    }
    console.log(data)
    let content;
    if(isFetching) {
        content = <Skeleton className="h-8 w-8" times={4}/>
    } else if (error) {
        content = <div>Error feacting Data.....</div>
    } else {
        content = data.map(photo=>
            <PhotoListItem key={photo.id} photo={photo}/>
        )
    }

    return <div>
        <div className='m-2 flex flex-row item-cenrer justify-between'>
            <h3 className='text-lg font-bold'>
                photos in {album.title}
            </h3>
            <Button loading={addPhotoresult.isLoading} onClick={handleAddPhoto}>
                +Add Photo
            </Button>
        </div>
        <div>
            {content}
        </div>
        <PhotoListItem/>
    </div>
}
export default PhotoList;