type Props = {
    params: Promise<{
        slug:string;
    }>;
}

export default async function HotelsDetails({
    params
}: Props){
    const{slug} = await params;

    return(
        <div>
            <h1>Explore Hotel Details before checkin or pay</h1>
            <p>Hotel: {slug}</p>
        </div>
    )
    
}