import React from 'react'
import seacrch from '../assets/images/icon-supervisor.svg'
import teambuilder from '../assets/images/icon-team-builder.svg'
import Karma from '../assets/images/icon-karma.svg'
import calculator from '../assets/images/icon-calculator.svg'
export default function Hero() {
    return (
        <>
            <div class="main d-f jc-c ai-c m-h-100 fd-c ">

                <div class="contant">
                    <h1 className='contant-h1'>Reliable, efficient delivery</h1>
                    <h2 className='contant-h2'>Powered by Technology</h2>
                    <p className='contant-p'>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful </p>
                </div>

                <div class="Box-Moudle d-f jc-c ai-c">
                    <div class="Box-Moudle__first_box max ">
                        <h3 class="heading">Supervisor</h3>
                        <p class="paragraph">Monitors activity to identify project roadblocks</p>
                        <span class="section-image">
                            <img src={seacrch} alt="" className='img' />
                        </span>
                    </div>

                    <div class="Box-Moudle__cart_2 d-f fd-c">
                        <div class="Box-Moudle__cart_2__second_box max ">
                            <h4 class="heading">Team Builder</h4>
                            <p class="paragraph">
                                Scans our talent network to create the optimal team for your
                                project
                            </p>
                            <span class="section-image">
                                <img src={teambuilder} alt="" className='img' />
                            </span>
                        </div>
                        <div class="Box-Moudle__cart_2__third_box max ">
                            <h5 class="heading">Karma</h5>
                            <p class="paragraph">Regularly evaluates our talent to ensure quality</p>
                            <span class="section-image">
                                <img src={Karma} alt="" className='img' />
                            </span>
                        </div>
                    </div>

                    <div class="Box-Moudle__four_box max ">
                        <h6 class="heading"> Calculator</h6>
                        <p class="paragraph">Uses data from past projects to provide better delivery estimates</p>
                        <span class="section-image">
                            <img src={calculator} alt="" className='img' />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
