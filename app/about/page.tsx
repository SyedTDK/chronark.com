import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function About() {
//About page that tells the user about the company and the founder and ceo
//this only talks about the company and the founder and ceo
// this page will only have one card that talks about the founder and ceo
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16">
						<Card>
							<div
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								
								<div className="z-10 flex flex-col items-center">
									<span className="font-medium duration-150 text-6xl text-zinc-200 group-hover:text-white font-display">
										MD SAJAHAN
									</span>
									<span className="mt-4 text-xl text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										Proprietor
									</span>

								</div>
							</div>
						</Card>
				</div>
			</div>
		</div>
    );
}

        





