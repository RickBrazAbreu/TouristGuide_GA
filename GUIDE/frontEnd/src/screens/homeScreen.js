import data from '../data.js';

const HomeSCreen = {
    render: () => {
        const { places } = data;
        return `
        <ul class="places">
            ${places.map( place => `
                <li>
                    <div class="place">
                        <a href="/#/place/${place._id}">
                            <img src="${place.image}" alt="${place.name}"> 
                        </a>
                        <div class="place-name">
                            <a href="/#/place/1">
                                ${place.name}
                            </a>
                        </div>
                        <div class="place-brand">
                            ${place.brand}
                            </a>
                        </div>
                        <div class="place-like">
                            ${place.like}
                            </a>
                        </div>
                        
                    </div>

                </li>
            `)}

        `
    }
}