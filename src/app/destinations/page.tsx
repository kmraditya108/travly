import Link from "next/link";

export default function DestinationsPage(){
    return(
        <div>
            <h1>Explore Destination</h1>
            <ul>
                <li><Link href="/destinations/goa">Goa</Link></li>
                <li><Link href="/destinations/manali">Manali</Link></li>
                <li><Link href="/destinations/kerla">Kerla</Link></li>
            </ul>
        </div>
    );
}