+++
title = "DND in Obsidian"
date = 2026-04-11
summary = "Creating an Obsidian-ified DND wiki"
main_image = "/images/dnd_obsidian.png"
categories = ["Obsidian"]
tags = ["Obsidian", "DND", "Open Source", "Python"]

[params]
  featured = true
  weight = 4  # Order in featured section (lower = first)
  showInPostList = true
+++
*Cover image sourced from [u/beau-tie](https://www.reddit.com/user/beau-tie/) on [Reddit](https://www.reddit.com/r/ObsidianMD/comments/18gurdg/obsidian_dd_app_icon_oc/)*

*TL;DR*: I have built a player's wiki Obsidian vault for easy access to information mid-session, eliminating the need to wait for slow-loading pages on spotty internet connections. Get it from my [GitHub](https://github.com/conor-brennan/dnd-obsidian-vault).

# Background

I've only been playing DND since early 2025 but my friends and I got hooked. We began playing nearly every week, having fun messing with NPCs and nearly getting our entire party killed in a cave brawl. Early on, I ended up falling into the role of note-taker for our party. I began on paper but started looking into alternate solutions. This is when I stumbled across Obsidian.

Obsidian ended up having a lot of really handy features for my use case. Templates let me cut down on writing boilerplate at the start of every session, workspace layouts let me save different views of my notes for quick access, and (most importantly) linking to pages with square brackets [[like this]] let me quickly see all of the references I have ever made to a topic, allowing me to make connections I otherwise may have missed with paper notes.

# The SRD vault

Internal links in Obsidian became even more powerful when I found the [DND SRD](https://www.dndbeyond.com/srd) as an [Obsidian vault](https://obsidianttrpgtutorials.com/Obsidian+TTRPG+Tutorials/Community+Supported+Games/DnD+5e/DnD+5e), allowing me to not only link to my notes on people and places in my campaign, but also link to anything in the base game of DND, like spells, classes, monsters, and much more! This made it almost completely unnecessary for me to have a browser open at all as I could now access all of my feat and spell information without much extra work.

That would have been the case, at least, if the SRD had all of the information I needed. See, the SRD only contains information on the base game of DND. There are many add-ons that exist for DND, such as [Tasha's Cauldron of Everything](https://www.dndbeyond.com/sources/dnd/tcoe) and [Xanathar's Guide to Everything](https://www.dndbeyond.com/sources/dnd/xgte), that extend the base game with new classes, items, races, and much more. The SRD vault was a great start, but it didn't have everything I needed.

So, I decided I would build my own using the publicly available information on the [DND Wiki](https://dnd5e.wikidot.com/). This was the main resource we used to build our characters so it should be a sufficient starting point for my personal vault.

# Building my own vault

The scraper works in a few stages: first, it crawls the wiki's front page to discover every relevant link. Then for each page, it parses the HTML to extract only the content that matters, converts it to Markdown, and replaces all internal web links into Obsidian's [[internal link]] format. Some pages like spell lists and item categories needed special handling for tabbed tables or additional page creation. The final output is a .md file per entry that gets written into the vault.

Unlike the SRD vault, this vault uses note metadata to take advantage of newer Obsidian features like bases and community plugins like [Dataview](https://github.com/blacksmithgu/obsidian-dataview).

This vault only contains information for players and does not include everything that you would need as a DM. For a more complete system for DMs, I would recommend combining this vault with the SRD vault.

The vault is now available for download on my [GitHub page](https://github.com/conor-brennan/dnd-obsidian-vault).