import { MovieProps } from "@/lib/globalProps"

type ResultType = {
    results: MovieProps[]
}

export default function Results({ results }: ResultType) {

    return (
        <div className="absolute w-full z-10 px-6 py-4 bg-black rounded-b">
            <div className='flex flex-col divide-y '>
                {results ? results.map((movie, index) => (
                    <div className='py-2' key={index}>
                        <h1>
                            {movie.title}
                        </h1>
                    </div>
                ))
                    :
                    null
                }
            </div>
        </div>

    )
}
