import gsap, { Power4 } from "gsap/gsap-core";

export default class Animation {
    constructor() {
        this._planets = document.querySelectorAll('.dots');
        this._scaleBtn = document.querySelector('#scale-button')
        this._positionBtn = document.querySelector('#position-button')
        this._stopBtn = document.querySelector('#stop-button');
        this._tl = gsap.timeline();
    }

    start() {
        this._scaleBtn.addEventListener('click', () => this._scalePlanet())
        this._positionBtn.addEventListener('click', () => this._positionPlanet())
        this._stopBtn.addEventListener('click', () => this._stopPlanet())
    }

    _scalePlanet() {
        this._resetPlanet();
        this._planets.forEach(p => p.id = "scaleStager")

        const tw = this._tl.to(this._planets, {
            scale: 0,
            duration: 1,
            stagger: {
                each: 0.1,
                yoyo: true,
                repeat: -1
            }
        })
        this._tl.add(tw)
    }

    _positionPlanet() {
        this._resetPlanet();
        this._planets.forEach(p => p.id = "positionStager")

        const tw = this._tl.to(this._planets, {
            y: '50px',
            duration: 1,
            stagger: {
                from: 'edges',
                each: 0.1,
                yoyo: true,
                repeat: -1
            }
        })
        this._tl.add(tw)
    }

    _stopPlanet() {
        this._resetPlanet();
    }

    _resetPlanet() {
        this._tl.clear(true);
        this._tl.to(this._planets, { y: 0, scale: 1, duration: 0 })
    }
}