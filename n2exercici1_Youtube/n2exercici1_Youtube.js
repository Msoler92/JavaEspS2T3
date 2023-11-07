use youtube

db.users.insertMany([
    {_id: 'user1', email: 'user1@email.com', password: 'hashedPassword1', username: 'User 1', birthdate: new ISODate('2001-08-11T00:00:00Z'), sex: 'male', country: 'Country 1', postal_code: 'postalCode1', subscriptions: ['channel3']},
    {_id: 'user2', email: 'user2@email.com', password: 'hashedPassword2', username: 'User 2', birthdate: new ISODate('2002-08-11T00:00:00Z'), sex: 'female', country: 'Country 2', postal_code: 'postalCode2', subscriptions: ['channel1', 'channel2']},
    {_id: 'user3', email: 'user3@email.com', password: 'hashedPassword3', username: 'User 3', birthdate: new ISODate('2003-08-11T00:00:00Z'), sex: 'other', country: 'Country 1', postal_code: 'postalCode3', subscriptions: ['channel1']},
    {_id: 'user4', email: 'user4@email.com', password: 'hashedPassword4', username: 'User 4', birthdate: new ISODate('2004-08-11T00:00:00Z'), sex: 'female', country: 'Country 2', postal_code: 'postalCode4', subscriptions: ['channel2', 'channel3']},
    {_id: 'user5', email: 'user5@email.com', password: 'hashedPassword5', username: 'User 5', birthdate: new ISODate('2005-08-11T00:00:00Z'), sex: 'male', country: 'Country 3', postal_code: 'postalCode5', subscriptions: ['channel1']}
])

db.channels.insertMany([
    {_id: 'channel1', name: 'Channel 1', description: 'Description Channel 1', user_id: 'user1'},
    {_id: 'channel2', name: 'Channel 2', description: 'Description Channel 2', user_id: 'user1'},
    {_id: 'channel3', name: 'Channel 3', description: 'Description Channel 3', user_id: 'user2'}
])

db.videos.insertMany([
    {_id: 'video1', channel_id: 'channel 1', title: 'Video 1', description: 'Description Video 1', size: 11.1, filename: 'video1.avi', duration: 11.0, thumbnail: null, playcount: 10, likes: [{user_id: 'user2', timestamp: new ISODate('2011-08-11T00:00:00Z')}, {user_id: 'user3', timestamp: new ISODate('2011-08-11T00:00:00Z')}], dislikes: [{user_id: 'user3', timestamp: new ISODate('2011-08-11T00:00:00Z')}], tags: ['funny', 'kittens'], upload_date: new ISODate('2011-08-11T00:00:00Z'), status: 'public'},
    {_id: 'video2', channel_id: 'channel 1', title: 'Video 2', description: 'Description Video 2', size: 11.1, filename: 'video2.avi', duration: 11.0, thumbnail: null, playcount: 10, likes: [{user_id: 'user2', timestamp: new ISODate('2011-08-12T00:00:00Z')}], dislikes: [{user_id: 'user3', timestamp: new ISODate('2011-08-12T00:00:00Z')}, {user_id: 'user4', timestamp: new ISODate('2011-08-12T00:00:00Z')}], tags: ['funny', 'doggos'], upload_date: new ISODate('2011-08-12T00:00:00Z'), status: 'public'},
    {_id: 'video3', channel_id: 'channel 1', title: 'Video 3', description: 'Description Video 3', size: 11.1, filename: 'video3.avi', duration: 11.0, thumbnail: null, playcount: 10, likes: [{user_id: 'user3', timestamp: new ISODate('2011-08-13T00:00:00Z')}, {user_id: 'user5', timestamp: new ISODate('2011-08-13T00:00:00Z')}], dislikes: [{user_id: 'user4', timestamp: new ISODate('2011-08-13T00:00:00Z')}], tags: ['funny', 'kittens'], upload_date: new ISODate('2011-08-13T00:00:00Z'), status: 'public'},
    {_id: 'video4', channel_id: 'channel 2', title: 'Video 4', description: 'Description Video 4', size: 11.1, filename: 'video4.avi', duration: 11.0, thumbnail: null, playcount: 10, likes: [{user_id: 'user4', timestamp: new ISODate('2011-08-14T00:00:00Z')}, {user_id: 'user3', timestamp: new ISODate('2011-08-14T00:00:00Z')}], dislikes: [{user_id: 'user2', timestamp: new ISODate('2011-08-14T00:00:00Z')}], tags: ['funny', 'kittens'], upload_date: new ISODate('2011-08-14T00:00:00Z'), status: 'public'},
    {_id: 'video5', channel_id: 'channel 3', title: 'Video 5', description: 'Description Video 5', size: 11.1, filename: 'video5.avi', duration: 11.0, thumbnail: null, playcount: 10, likes: [{user_id: 'user2', timestamp: new ISODate('2011-08-15T00:00:00Z')}, {user_id: 'user5', timestamp: new ISODate('2011-08-15T00:00:00Z')}], dislikes: [{user_id: 'user3', timestamp: new ISODate('2011-08-15T00:00:00Z')}], tags: ['funny', 'kittens'], upload_date: new ISODate('2011-08-15T00:00:00Z'), status: 'public'},
    {_id: 'video6', channel_id: 'channel 3', title: 'Video 6', description: 'Description Video 6', size: 11.1, filename: 'video6.avi', duration: 11.0, thumbnail: null, playcount: 10, likes: [{user_id: 'user1', timestamp: new ISODate('2011-08-16T00:00:00Z')}, {user_id: 'user4', timestamp: new ISODate('2011-08-16T00:00:00Z')}], dislikes: [{user_id: 'user3', timestamp: new ISODate('2011-08-16T00:00:00Z')}], tags: ['funny', 'kittens'], upload_date: new ISODate('2011-08-16T00:00:00Z'), status: 'public'}
])

db.playlists.insertMany([
    {_id: 'playlist1', user_id: 'user3', name: 'Playlist 1', videos: ['video1', 'video3', 'video6'], creation_date: new ISODate('2011-08-14T00:00:00Z'), status: 'private'},
    {_id: 'playlist2', user_id: 'user4', name: 'Playlist 2', videos: ['video1', 'video2', 'video3'], creation_date: new ISODate('2011-08-14T00:00:00Z'), status: 'public'}
])

db.comments_video.insertMany([
    {video_id: 'video1', comments: [{user_id: 'user1', text: 'Comment 11', timestamp: new ISODate('2011-08-11T00:00:00Z'), likes: [{user_id: 'user2', timestamp: new ISODate('2011-08-11T00:00:00Z')}, {user_id: 'user3', timestamp: new ISODate('2011-08-11T00:00:00Z')}], dislikes: [{user_id: 'user4', timestamp: new ISODate('2011-08-11T00:00:00Z')}]}, {user_id: 'user3', text: 'Comment 12', timestamp: new ISODate('2011-08-11T00:00:00Z'), likes: [{user_id: 'user4', timestamp: new ISODate('2011-08-11T00:00:00Z')}, {user_id: 'user2', timestamp: new ISODate('2011-08-11T00:00:00Z')}], dislikes: []}, {user_id: 'user4', text: 'Comment 13', timestamp: new ISODate('2011-08-11T00:00:00Z'), likes: [], dislikes: [{user_id: 'user5', timestamp: new ISODate('2011-08-11T00:00:00Z')}]}]},
    {video_id: 'video2', comments: [{user_id: 'user2', text: 'Comment 21', timestamp: new ISODate('2011-08-11T00:00:00Z'), likes: [{user_id: 'user2', timestamp: new ISODate('2011-08-11T00:00:00Z')}], dislikes: []}]},
    {video_id: 'video4', comments: [{user_id: 'user2', text: 'Comment 31', timestamp: new ISODate('2011-08-11T00:00:00Z'), likes: [], dislikes: []}, {user_id: 'user5', text: 'Comment 32', timestamp: new ISODate('2011-08-11T00:00:00Z'), likes: [{user_id: 'user2', timestamp: new ISODate('2011-08-11T00:00:00Z')}], dislikes: []}]}
])
