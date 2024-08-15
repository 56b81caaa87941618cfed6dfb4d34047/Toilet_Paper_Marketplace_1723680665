/* Summary: This is a canvas element for displaying a purple glow and a particle animation in the background of the hero component.
*/

Vue.component("particle_component_1723680666", {
    template: `
    <div id="illustration"
        class="absolute inset-0 -z-10 -mx-28 rounded-b-[5rem] pointer-events-none overflow-hidden"
        style="z-index:0" aria-hidden="true">
        <div id="illustration-inner" class="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
            <svg id="illustration-svg" xmlns="http://www.w3.org/2000/svg" class="max-w-none"
                xmlns:xlink="http://www.w3.org/1999/xlink" width="2146" height="744">
                <defs>
                    <linearGradient id="gradient1" x1="43.176%" x2="50%" y1="12.436%" y2="97.744%">
                        <stop offset="0%" :stop-color="gradientOnePrimaryStopColor" />
                        <stop offset="100%" :stop-color="gradientSecondaryStopColor" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                        <stop offset="0%" :stop-color="gradientSecondaryStopColor" />
                        <stop offset="100%" :stop-color="gradientSecondaryStopColor" stop-opacity="0" />
                    </linearGradient>
                    <filter id="filter1" width="145.2%" height="187%" x="-22.6%" y="-43.5%"
                        filterUnits="objectBoundingBox">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
                    </filter>
                    <filter id="filter2" width="165.1%" height="170.3%" x="-32.5%" y="-35.1%"
                        filterUnits="objectBoundingBox">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
                    </filter>
                    <radialGradient id="radial-gradient" cx="50%" cy="100%" r="77.678%" fx="50%"
                        fy="100%" gradientTransform="matrix(0 -1 .37746 0 .123 1.5)">
                        <stop offset="0%" :stop-color="radialGradientPrimaryColor" />
                        <stop offset="22.35%" :stop-color="radialGradientSecondaryColor" />
                        <stop offset="100%" :stop-color="radialGradientTertiaryColor" stop-opacity="0" />
                    </radialGradient>
                    <path id="path1" d="M0 0h2440v921H0z" />
                </defs>
                <g fill="none" fill-rule="evenodd" transform="translate(-140 -177)">
                    <mask id="mask1" fill="#fff">
                        <use xlink:href="#path1" />
                    </mask>
                    <g mask="url(#mask1)">
                        <path id="radial-path" fill="url(#radial-gradient)" d="M0 0h2440v921H0z" />
                        <path id="gradient-path1" fill="url(#gradient1)" fill-rule="nonzero"
                            d="M1975.72 781.763c-3.682-3-8.757-3.61-13.042-1.568a12.323 12.323 0 0 0-7.014 11.129v98.57h-430.368c-6.79 0-12.296 5.516-12.296 12.321v98.57c0 6.805 5.505 12.321 12.296 12.321h430.368v98.57a12.323 12.323 0 0 0 7.014 11.129 12.276 12.276 0 0 0 13.042-1.568l196.74-160.176a12.33 12.33 0 0 0 4.54-9.561 12.33 12.33 0 0 0-4.54-9.561l-196.74-160.176Z"
                            filter="url(#filter1)" />
                        <path id="gradient-path2" fill="url(#gradient2)" d="m913 274 461 369-284 58z"
                            filter="url(#filter2)" />
                    </g>
                </g>
            </svg>
        </div>
    </div>`,
        data() {
            return {
                expanded: false, 
                tab: null,
                gradientOnePrimaryStopColor:"#A855F7",
                gradientSecondaryStopColor: "#6366F1",
                radialGradientPrimaryColor: "#E9D5FF",
                radialGradientSecondaryColor: "#A855F7",
                radialGradientTertiaryColor: "#0F172A"
            };  
        },
    });
                    