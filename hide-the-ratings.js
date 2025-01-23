// ==UserScript==
// @name HideTheRatings
// @version 1.0.0
// @description Userscript to hide the ratings on various websites.
// @downloadURL https://github.com/JoseDeFreitas/hide-the-ratings/releases
// @supportURL https://github.com/JoseDeFreitas/hide-the-ratings/issues/new
// @homepageURL https://github.com/JoseDeFreitas/hide-the-ratings
// @author JoseDeFreitas
// @match https://letterboxd.com/film/*
// @match https://www.imdb.com/title/*
// @match https://www.imdb.com/*/title/*
// @match https://www.rottentomatoes.com/m/*
// @match https://www.goodreads.com/book/*
// @match https://myanimelist.net/anime/*
// @match https://myanimelist.net/manga/*
// @match https://backloggd.com/games/*
// @match https://ggapp.io/games/*
// @match https://store.steampowered.com/app/*
// ==/UserScript==

(function() {
    'use strict';
  
    const website_host = window.location.hostname;
  
    // For Letterboxd
    if (website_host === "letterboxd.com") {
        setTimeout(function() {
            const letterboxd1 = document.getElementsByClassName("ratings-histogram-chart")[0];
            if (letterboxd1) {
                letterboxd1.remove();
            }
        }, 1000);
    }
  
    // For IMDb
    if (website_host === "www.imdb.com") {
        const imdb1 = document.getElementsByClassName("sc-acdbf0f3-0")[0];
        if (imdb1) {
            imdb1.remove();
        }
    }
  
    // For RottenTomatoes
    if (website_host === "www.rottentomatoes.com") {
        const rottentomatoes1 = document.getElementsByClassName("critics-score-wrap")[1];
        const rottentomatoes2 = document.getElementsByClassName("audience-score-wrap")[1];
        const rottentomatoes3 = document.getElementsByClassName("collapsed-scores-row")[1];
        if (rottentomatoes1 || rottentomatoes2 || rottentomatoes3) {
            rottentomatoes1.remove();
            rottentomatoes2.remove();
            rottentomatoes3.remove();
        }
    }
  
    // For Goodreads
    if (website_host === "www.goodreads.com") {
        const goodreads1 = document.getElementsByClassName("BookPageMetadataSection__ratingStats")[0];
        if (goodreads1) {
            goodreads1.remove();
        }
  
        const goodreads2 = document.getElementsByClassName("ReviewsSectionStatistics")[0];
        if (goodreads2) {
            goodreads2.remove();
        }
    }
  
    // For AniList
  
    // For MyAnimeList
    if (website_host === "myanimelist.net") {
        const myanimelist_parent = document.getElementsByClassName("stats-block")[0];
        if (myanimelist_parent) {
            myanimelist_parent.removeChild(myanimelist_parent.children[0])
        }
    }
  
    // For Backloggd
    if (website_host === "backloggd.com") {
        const backloggd_parent = document.getElementsByClassName("side-section")[1];
        if (backloggd_parent) {
            for (let i = 0; i < 4; i++) {
                if (backloggd_parent.children.length > 0) {
                    backloggd_parent.removeChild(backloggd_parent.children[0]);
                }
            }
  
            backloggd_parent.style.padding = "10px 12px";
        }
    }
  
    // For GGapp
  
    // For Steam
    if (website_host === "store.steampowered.com") {
        const steam1 = document.getElementById("userReviews");
        if (steam1) {
            steam1.remove();
        }
  
        const steam2 = document.getElementById("review_histograms_container");
        if (steam2) {
            steam2.remove();
        }
  
        const steam3 = document.getElementById("user_reviews_filter_score");
        if (steam3) {
            steam3.remove();
        }
    }
})();
