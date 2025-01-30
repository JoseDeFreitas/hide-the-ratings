# Hide the Ratings

Userscript to hide the ratings on various websites. The idea behind it is so that you don't get
influenced by what people think about the work you want to watch, read, etc., while wanting to
read information about that work. Websites of different kinds are taken into account. Shipped
in an userscript for easy and fast activation and supported by the most popular userscript managers
(making it easy to use no matter the browser).

## Installation

The fastest way is to copy the content of the file [hide-the-ratings.js](https://github.com/JoseDeFreitas/hide-the-ratings/blob/main/hide-the-ratings.js)
and paste it in a new script in your userscript manager. In [Violentmonkey](https://violentmonkey.github.io),
go to the Settings, click on the "+" button "New", then "New" again, paste the code, and save it.

## Websites

### Movies

| Website | Notes |
|---------|-------|
| letterboxd.com | For now, the script can't reach the velocity of the loading, so it just waits 1 second before deleting, which may cause the rating to still appear, especially if another tab is focused. |
| imdb.com |       |
| rottentomatoes.com |       |

### Series

| Website | Notes |
|---------|-------|
| serializd.com |       |

### Anime

| Website | Notes |
|---------|-------|
| myanimelist.net |       |
| anilist.co |       |

### Music

| Website | Notes |
|---------|-------|
| musicboard.app |       |

### Videogames

| Website | Notes |
|---------|-------|
| backloggd.com |       |
| ggapp.io |       |
| store.steampowered.com |       |

### Books

| Website | Notes |
|---------|-------|
| goodreads.com | It seems to break the layout, but only sometimes, and depends on whether the user rated the book or not. |

## Contributing

If you want to add support to a website, you can [open an issue](https://github.com/JoseDeFreitas/hide-the-ratings/issues/new?template=website-support.md);
alternatively, you can work on it by yourself by forking the repository and submitting a pull
request. Read the "Notes" section below for more information about the websites.

## Notes

The websites covered by this userscript are websites more considered like social media (commonly
known as "tracking websites"). They often feature the user creating an account, lists, following
other people, earning badges, etc. Because of this, websites like Metacritic, which main focus
is ratings are reviews, are not covered by this userscript (since people don't go to these kind
of websites to look for more information or to add them to their lists).
