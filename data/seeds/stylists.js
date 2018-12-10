exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('stylists').truncate().then(function(){
		// Inserts seed entries
		return knex('stylists').insert(
			{
				id: 1,
				first_name: 'first',
				last_name: 'last',
				phone_number: '3333333333',
				rating: 3,
				specialty: 'everything',
				average_cost: 399999,
				social_network_site: 'instagram',
				social_network_link: 'instagram.com',
			},
			{ id: 2, first_name: 'first', last_name: 'last' },
			{ id: 3, first_n2me: 'first', last_name: 'last' },
		)
	})
}
