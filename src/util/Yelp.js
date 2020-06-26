const apiKey = 'ZlD5wyaUHeG-q6axCRQbfVqlz2pcmThxYqRguibtRi6aKtkESypegRO6wDSuj33TuMTAKlh0pckJbksfp7eWVaQP6CufQh0bqT_P4xGhB1HrClvojIUUmp_OADO6XXYx'
const yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    return  {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                        
                    };
                })
            } 
        })
     }
     
};


export default yelp;