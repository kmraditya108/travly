import React from 'react';

export default function DestinationsLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <h2>Explore he world</h2>
            <div>
                <aside>
                    Destinations filter
                </aside>


                <div>{children}</div>
            </div>
        </section>
    )
}