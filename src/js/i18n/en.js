export default {
  // Script info
  'script-name': 'Convenient Discussions',
  'script-name-genitive': '{{int:convenientdiscussions-script-name}}',
  'script-name-prepositional': '{{int:convenientdiscussions-script-name}}',
  'script-name-short': 'CD',

  // Fill only if the phrase "reply to <Username>" sounds silly in your language (usually, because
  // the username lacks inflection), and "reply to user <Username>" is needed.
  'user-male-dative': '',
  'user-female-dative': '',
  'user-unknown-dative': '',

  'user-male-genitive': '',
  'user-female-genitive': '',
  'user-unknown-genitive': '',

  // Settings dialog
  'sd-title': '{{int:convenientdiscussions-script-name}} settings',
  'sd-save': 'Save',
  'sd-reload': 'Reload',
  'sd-page-general': 'General',
  'sd-page-commentform': 'Comment form',
  'sd-page-notifications': 'Notifications',
  'sd-page-removedata': 'Remove data',
  'sd-alloweditotherscomments': 'Show a link to edit other users\' comments',
  'sd-alwaysexpandsettings': 'Expand the comment settings when replying',
  'sd-autopreview': 'Preview the comment as I type',
  'sd-notifications': 'Ordinary notifications',
  'sd-notifications-radio-all': 'Notify me about replies to my comments and comments in sections that I watch',
  'sd-notifications-radio-tome': 'Notify me about replies to my comments only',
  'sd-notifications-radio-none': 'Don\'t notify me',
  'sd-notifications-help': 'Notifications are small popups in the top right corner of a page.',
  'sd-desktopnotifications': 'Desktop notifications',
  'sd-desktopnotifications-radio-all': 'Notify me about replies to my comments and comments in sections that I watch',
  'sd-desktopnotifications-radio-tome': 'Notify me about replies to my comments only',
  'sd-desktopnotifications-radio-none': 'Don\'t notify me',
  // $1 is a domain.
  'sd-desktopnotifications-help': 'Desktop notifications inform about events on pages that are open but hidden. To receive them, you must grant a premission to $1.',
  'sd-highlightowncomments': 'Highlight my comments',
  'sd-insertbuttons': 'Text insert buttons',
  'sd-insertbuttons-multiselect-placeholder': 'Add a button',
  'sd-insertbuttons-help': 'Use <code>+</code> to specify the place where the caret should be put after inserting the text; for example, <code>&#123;&#123;+&#125;&#125;</code>. Use <code>;</code> to specify the displayed text that is different from the one inserted; for example, <code>&lt;code&gt;+&lt;/code&gt;;&lt;code /&gt;</code>. Use <code>&#92;</code> before the aforementioned characters to insert them as is; for example, <code>2&#92;+2</code>.',
  'sd-notificationsblacklist': 'Don\'t notify about comments of these users',
  'sd-notificationsblacklist-multiselect-placeholder': 'Add a user',
  'sd-mysignature': 'Signature code',
  'sd-mysignature-help': 'Must contain <code>~~'.concat('~~</code>. Usually used to add characters before the signature. The signature itself should be edited in the <a href="https://en.wikipedia.org/wiki/Special:Preferences#mw-prefsection-personal" target="_blank">site settings</a>.'),
  'sd-showtoolbar': 'Show the edit toolbar',
  'sd-defaultcommentlinktype': 'Default link type to copy when clicking "{{int:convenientdiscussions-cm-copylink}}" in a comment menu',
  'sd-defaultcommentlinktype-radio-diff': 'Diff link',
  'sd-defaultcommentlinktype-radio-wikilink': 'Wikilink',
  'sd-defaultcommentlinktype-radio-link': 'Regular link',
  'sd-defaultcommentlinktype-help': 'To copy a link of a different type, click "{{int:convenientdiscussions-cm-copylink}}" while holding Shift.',
  'sd-defaultcommentlinktype-help-notdifflinks': 'Links other than diff links will work only for users that have Convenient Discussions installed.',
  'sd-defaultsectionlinktype': 'Default link type to copy when clicking "{{int:convenientdiscussions-sm-copylink}}" in a section menu',
  'sd-defaultsectionlinktype-radio-wikilink': 'Wikilink',
  'sd-defaultsectionlinktype-radio-link': 'Regular link',
  'sd-defaultsectionlinktype-help': 'To copy a link of a different type, click "{{int:convenientdiscussions-sm-copylink}}" while holding Shift.',
  'sd-watchsectiononreply': 'Watch sections that I reply in',
  'sd-close-confirm': 'The settings were not saved. Are you sure you want to close the window?',
  'sd-close-confirm-yes': 'Close',
  'sd-close-confirm-no': 'Cancel',
  'sd-saved': 'The settings have been saved successfully. Reload the page to apply them.',
  'sd-reset': 'Reset settings (in all sections)',
  'sd-reset-confirm': 'Are you sure you want to reset the settings? (Click "{{int:convenientdiscussions-sd-save}}" after resetting.)',
  'sd-removedata': 'Remove all script data',
  'sd-removedata-confirm': 'This will permanently delete your settings, talk page last visits, watched sections, and drafts of unsent comments. Do you want to proceed?',
  'sd-removedata-confirm-yes': 'Yes',
  'sd-removedata-confirm-no': 'No',
  'sd-dataremoved': 'Your data has been successfully removed.',
  'sd-error-load': 'Couldn\'t load the settings: $1/$2',
  'sd-error-save': 'Couldn\'t update the settings: $1/$2',
  'sd-error-removedata': 'Couldn\'t remove the data on the server: $1/$2',

  // Desktop notifications dialogs
  'confirm-desktopnotifications': 'Do you want Convenient Discussions to send you desktop notifications about new comments on currently open pages if they are addressed to you or posted in sections that you watch? You can disable this feature in the settings.',
  'confirm-desktopnotifications-yes': 'Yes',
  'confirm-desktopnotifications-no': 'No',
  'alert-grantpermission': 'Grant a permission to the site.',
  'alert-grantpermission-again': 'You have desktop notifications switched on, but the site is not allowed to send them. Grant a permission to the site to receive notifications, or deny to prevent this message from showing up again.',

  // Comment menu
  'cm-gotoparent': '▲',
  'cm-gotoparent-tooltip': 'Go to the parent comment',
  'cm-gotochild': '▼',
  'cm-gotochild-tooltip': 'Go back to the child comment',
  'cm-copylink': '#',
  'cm-copylink-tooltip': 'Сopy $1. Click while holding Shift to select a different type of link',
  'cm-copylink-tooltip-diff': 'a link to the diff',
  'cm-copylink-tooltip-wikilink': 'a wikilink',
  'cm-copylink-tooltip-link': 'a link',
  'cm-thank': 'Thank',
  'cm-thank-tooltip': 'Thank for the edit that added this comment',
  'cm-thank-disabled-tooltip': 'You have already thanked the user for this comment',
  'cm-edit': 'Edit',
  'cm-reply': 'Reply',

  // Section buttons
  'section-reply': 'Reply',
  'section-addsubsection': 'Add subsection',
  'section-addsubsection-to': 'Add subsection to "$1"',
  'section-newcomments': 'There are new comments in this section',

  // Copy link dialog
  'cld-diff': 'Diff link',
  'cld-diff-error': 'Couldn\'t find',
  'cld-diff-error-network': 'Couldn\'t find (network error)',
  'cld-diff-error-unknown': 'Couldn\'t find (unknown error)',
  'cld-wikilink': 'Wikilink',
  'cld-wikilink-help-comment': 'This link and the links below will work only with users that have Convenient Discussions installed.',
  'cld-currentpagewikilink': 'Wikilink from the same page',
  'cld-link': 'Regular link',
  'cld-close': 'Close',
  'cld-copy': 'Copy',

  // Copy link
  'copylink-copied': 'The link has been copied to the clipboard.',
  'copylink-copied-url': '<a href="$1" target="_blank">The link</a> has been copied to the clipboard.',
  'copylink-error': 'Couldn\'t copy the link.',
  'copylink-error-diffnotfound': 'Couldn\'t find the edit that added this comment. You can look for it in the <a href="$1" target="_blank">revision history</a> for yourself.',
  'copylink-error-diffnotfound-network': 'Couldn\'t find the edit that added this comment (network error).',
  'copylink-error-diffnotfound-unknown': 'Couldn\'t find the edit that added this comment (unknown error).',

  // Thank
  'thank-confirm': 'Thank $1 for <a href="$3" target="_blank">this edit</a>?',
  'thank-error': 'Couldn\'t send the thank you.',
  'thank-error-multipletimestamps': 'Looks like <a href="$1" target="_blank">the edit</a> that added this comment has more than one comment. Please decide for yourself if you\'re gonna thank for it.',
  'thank-error-diffnotfound': 'Couldn\'t find the edit that added this comment. You can look for it in the <a href="$1" target="_blank">revision history</a> for yourself.',
  'thank-error-network': 'Couldn\'t send the thank you (network error).',
  'thank-success': 'Thank you notification has been sent.',

  // Section menu
  'sm-editopeningcomment': 'edit opening comment',
  'sm-editopeningcomment-tooltip': 'Edit the comment opening the section',
  'sm-addsubsection': 'add subsection',
  'sm-addsubsection-tooltip': 'Add a subsection to this section',
  'sm-move': 'move',
  'sm-move-tooltip': 'Move the topic to another page',
  'sm-watch': 'watch',
  'sm-watch-tooltip': 'Add the section to the watchlist. This affects notifications and bolding in the watchlist',
  'sm-unwatch': 'unwatch',
  'sm-unwatch-tooltip': 'Remove the section from the watchlist',
  'sm-copylink': '#',
  'sm-copylink-tooltip-wikilink': 'a wikilink',
  'sm-copylink-tooltip-link': 'a link',
  'sm-copylink-tooltip': 'Сopy $1. Click while holding Shift to choose a link of another type',

  'section-watch-success': 'The section "$1" has been added to your watchlist.',
  'section-unwatch-success': 'The section "$1" has been removed from your watchlist.',
  'section-unwatch-stillwatched': '<strong>Note:</strong> you are still watching this section as it is included in the section "$1" that you watch.',
  'section-watch-pagenotwatched': '<strong>Note:</strong> you watch the section but not the page. In order for new comments to be highlighted on your watchlist page, you should add the page to the watchlist.',
  'section-watch-error-load': 'Couldn\'t load the settings from the server`.',
  'section-watch-error-save': 'Couldn\'t save the settings to the server.',
  'section-watch-error-maxsize': 'Couldn\'t update the settings: the size of the watched sections list exceeds the maximum size. <a class="cd-notification-editWatchedSections">Edit the sections list</a> to fix this.',

  // Edit watched sections (topics)
  'ewsd-title': 'Edit watched sections list',
  'ewsd-save': 'Save',
  'ewsd-saved': 'The watched sections list has been successfully saved.',
  'ewsd-error-maxsize': 'Couldn\'t update the settings: the size of the watched sections list exceeds the maximum size. Reduce the size of the list to fix this.',
  'ewsd-error-processing': 'An error occurred while processing the watched sections list: $1/$2',
  'ewsd-close-confirm': 'The watched sections list wasn\'t saved. Are you sure you want to close the window?',
  'ewsd-close-confirm-yes': 'Close',
  'ewsd-close-confirm-no': 'Cancel',

  // Move section dialog
  'msd-title': 'Move topic',
  'msd-move': 'Move',
  'msd-reload': 'Reload',
  'msd-targetpage': 'Enter the name of the discussion page to move the topic to:',
  'msd-summaryending': 'Edit summary (will be added to the standard one)',
  'msd-error-wrongpage': 'Wrong page.',
  'msd-error-sourcepagedeleted': 'The current page was deleted.',
  'msd-error-targetpagedoesntexist': 'The target page doesn\'t exist.',
  'msd-error-invalidpagename': 'Invalid page name.',
  'msd-error-editconflict': 'Edit conflict. Just click "{{int:ooui-dialog-process-retry}}".',
  'msd-error-editingtargetpage': 'Error while editing the target page.',
  'msd-error-editingsourcepage': 'Error while editing the source page. You will have to edit it manually.',
  'msd-moved': '<p>The topic has been successfully moved. You may reload the page or go to <a href="$1">the page where the topic was moved to</a>.</p>',
  'msd-bottom': 'The code may be different if the page would be updated while the window is idle.',

  // Move section code
  'move-sourcepagecode': '{{Moved discussion to|$1|$2}}',
  'move-targetpagecode': '{{Moved discussion from|$1|$2}}',

  // Edit summary phrases
  'es-reply': 'reply',
  'es-reply-genitive': 'the reply',
  'es-reply-by-genitive': '{{int:convenientdiscussions-es-reply-genitive}} by $1',
  'es-addition': 'addition',
  'es-addition-genitive': 'addition',
  'es-delete': 'deleting',
  'es-edit': 'editing',
  'es-topic-genitive': 'the topic',
  'es-subsection-genitive': 'the subsection',
  'es-topic-openingcomment-genitive': 'the opening comment',
  'es-subsection-openingcomment-genitive': 'the opening comment',
  'es-comment-genitive': 'the comment',
  'es-comment-by-genitive': '{{int:convenientdiscussions-es-comment-genitive}} by $1',
  'es-new-topic': 'new topic',
  'es-new-subsection': 'new subsection',
  'es-to': 'to',
  'es-moved': 'moved',
  'es-moved-from': '{{int:convenientdiscussions-es-moved}} from [[$1]]',
  'es-moved-to': '{{int:convenientdiscussions-es-moved}} to [[$1]]',
  'es-reply-to': '{{int:convenientdiscussions-es-reply}} {{int:convenientdiscussions-es-to}} $1',
  'es-action-to': '$1 $2',

  // Generic errors
  'error-loaddata': '{{int:convenientdiscussions-script-name}}: Couldn\'t load the data required by the script.',
  'error-processpage': '{{int:convenientdiscussions-script-name}}: Couldn\'t process the page.',
  'error-reloadpage': 'Couldn\'t reload the page.',
  'error-api': 'API error',
  'error-network': 'Network error.',
  'error-nodata': 'The server response lacks the requested data.',
  'error-unknown': 'Unknown error.',
  'error-javascript': 'A JavaScript error occurred. See the details in the JavaScript console (F12 → Console).',
  'error-locatecomment': 'Couldn\'t locate the comment in the code. This may be caused by the complexity of the comment code, the script flaw of the fact that the comment was deleted or heavily edited. You can try to <a class="cd-message-reloadPage">reload the page</a>.',
  'error-locatesection': 'Couldn\'t locate the section in the code. This may be caused by the complexity of the section\'s first comment code, the script flaw of the fact that the section was deleted. You can try to <a class="cd-message-reloadPage">reload the page</a>.',

  // Comment form fields
  'cf-headline': 'Subject/headline',
  'cf-headline-topic': 'Topic subject/headline',
  'cf-headline-subsection': 'Subject/headline of subsection of "$1"',
  'cf-headline-topic-lowercase': 'the topic subject/headline',
  'cf-headline-subsection-lowercase': 'the section subject/headline',
  'cf-comment-placeholder-replytosection': 'Reply to "$1"',
  'cf-comment-placeholder-replytocomment': 'Reply to $1',
  'cf-comment-placeholder-addsection': 'Comment text',
  'cf-comment-placeholder-addsubsection': 'Comment text',
  'cf-summary-placeholder': 'Edit summary',
  'cf-summary-preview': 'Edit summary preview',

  // Comment form buttons
  'cf-save': 'Save',
  'cf-save-short': 'Save',
  'cf-delete-button': 'Delete',
  'cf-delete-button-short': 'Delete',
  'cf-addtopic': 'Add topic',
  'cf-addtopic-short': 'Add',
  'cf-addsubsection': 'Add subsection',
  'cf-addsubsection-short': 'Add',
  'cf-reply': 'Reply',
  'cf-reply-short': 'Reply',
  'cf-preview': 'Preview',
  'cf-preview-short': 'Preview',
  'cf-viewchanges': 'View changes',
  'cf-viewchanges-short': 'Changes',
  'cf-cancel': 'Cancel',
  'cf-cancel-short': 'Cancel',
  'cf-settings': 'Settings',
  'cf-settings-tooltip': '{{int:convenientdiscussions-script-name}} settings',
  'cf-help': '?',
  'cf-help-short': '?',
  'cf-help-content': '<p><a href="https://www.mediawiki.org/wiki/User:Jack_who_built_the_house/Convenient_Discussions" target="_blank">Script documentation</a></p>\n<p>Hotkeys:</p>\n<ul>\n<li><b>Ctrl+Enter</b> — post</li>\n<li><b>Esc</b> — cancel</li>\n<li><b>Q</b> (<b>Ctrl+Alt+Q</b>) — quote</li>\n</ul>',
  'cf-error-tryagain': 'Try again',
  'cf-error-cancel': 'Cancel',
  'cf-quote-tooltip': 'Quote the selected text',
  'cf-quote-placeholder': 'Quoted text',

  // Comment form options
  'cf-minor': 'Minor edit',
  'cf-watch': 'Watch this page',
  'cf-watchsection-topic': 'Watch this topic',
  'cf-watchsection-subsection': 'Watch subsection',
  'cf-watchsection-tooltip': 'Add this section to the watchlist. This affects notifications and bolding in the watchlist',
  'cf-ping-sectionauthor': 'Notify section author',
  'cf-ping-commentauthor': 'Notify addressee',
  'cf-ping-tooltip': 'By the ping function',
  'cf-ping-tooltip-unreg': 'Can\'t send a notification to a non-registered user',
  'cf-small': 'In small font',
  'cf-nosignature': 'No signature',
  'cf-delete': 'Delete',

  // Other comment form-related strings
  'cf-block-preview': 'Preview',
  'cf-block-viewchanges': 'Changes',
  'cf-block-close': 'Close',
  'cf-message-nochanges': 'No changes.',

  // Reactions to the text entered in the form
  'cf-reaction-templateinheadline': 'Don\'t use templates in headlines: this breaks section links.',
  // Minifier eats "~~\~~" and "'~~' + '~~'"
  'cf-reaction-signature': 'No need to enter <kbd>~~'.concat('~~</kbd>: the sugnature will be added automatically.'),
  'cf-reaction-pre': '<code>&lt;pre&gt;</code> tags can break the layout—better use <code>&lt;syntaxhighlight&gt;</code>.',

  // Comment form error messages
  'cf-error-getpagecode': 'Couldn\'t get the page code.',
  'cf-error-findplace': 'Couldn\'t find the proper place in the code to insert the comment into',
  'cf-error-findplace-unexpectedheading': 'unexpected heading',
  'cf-error-numberedlist': 'It\'s impossible to form the comment correctly without distorting the numbered list markup. Remove lists from the comment.',
  'cf-error-delete-repliestocomment': 'Can\'t delete the comment because it has replies.',
  'cf-error-delete-repliesinsection': 'Can\'t delete the section because it has replies.',
  'cf-error-preview': 'Couldn\'t preview the comment.',
  'cf-error-viewchanges': 'Couldn\'t get changes.',
  'cf-error-couldntedit': 'Couldn\'t edit the page.',
  'cf-error-pagenotedited': 'The page was not edited.',
  'cf-error-blocked': 'You are blocked from editing. The page was not edited.',
  'cf-error-pagedoesntexist': 'The page doesn\'t exist.',
  'cf-error-pagedeleted': 'The page was deleted.',
  'cf-error-editconflict': 'Edit conflict. Trying again…',
  'cf-error-spamblacklist': 'Error: address $1 is blacklisted. The page was not edited.',
  'cf-error-titleblacklist': 'Error: the page name is blacklisted. The page was not edited.',
  'cf-error-abusefilter': 'Your edit was automatically rejected by abuse filter "$1".',

  // Comment form confirmations
  'cf-confirm-noheadline': 'You didn\'t enter $1. Are you sure you want to post the comment?',
  'cf-confirm-empty': 'Are you sure you want to post an empty comment?',
  'cf-confirm-long': 'This comment is longer than $1 characters. Are you sure you want to post it?',
  'cf-confirm-secondlevelheading': 'The comment contains the code of the second level section. If you are moving the source code, it\'s better to use the standard edit source function, otherwise it could be altered unpredictably. Are you sure you want to post the comment?',
  'cf-confirm-delete': 'Are you sure you want to delete the comment?',
  'cf-confirm-delete-yes': 'Delete',
  'cf-confirm-delete-no': 'Cancel',
  'cf-confirm-close': 'Are you sure you want to close the form? The input will be lost.',
  'cf-confirm-close-yes': 'Close',
  'cf-confirm-close-no': 'Cancel',

  // Section/comment not found
  'deadanchor-section-title': 'Section not found',
  'deadanchor-section-text': 'It could be moved or archived.',
  'deadanchor-comment-title': 'Comment not found',
  'deadanchor-comment-text': 'It could be archived.',
  'deadanchor-searchinarchive': 'Do you want to search in the archive?',

  // Navigation panel
  'navpanel-refresh': 'Refresh page',
  'navpanel-refresh-tooltip': 'Click to update the page',
  'navpanel-previous': 'Go to the previous new comment',
  'navpanel-next': 'Go to the next new comment',
  'navpanel-firstunseen': 'Go to the first unseen comment',
  'navpanel-commentform': 'Go to the next comment form out of sight',
  'navpanel-newcomments-count': '$1 {{plural:$1|new comment|new comments}}. {{int:convenientdiscussions-navpanel-refresh-tooltip}}',
  'navpanel-newcomments-insection': 'Section "$1":',
  'navpanel-newcomments-outsideofsections': 'Outside of sections',
  'navpanel-newcomments-toyou': '(to you)',
  'navpanel-newcomments-unknownauthor': 'Unknown author',
  'navpanel-newcomments-unknowndate': 'unknown date',

  // Notification texts
  'notification-toyou': '$1 replied to your comment$3. <a href="$4" class="cd-notification-reloadPage">Reload the page</a>$5.',
  'notification-toyou-desktop': '$1 replied to your comment$3 on page "$4".',
  'notification-insection': '$1 replied in section "$3". <a href="$4" class="cd-notification-reloadPage">Reload the page</a>$5.',
  'notification-insection-desktop': '$1 replied in section "$3" on page "$4".',
  'notification-newcomments': '$1 new {{plural:$1|comment|comments|comments}}$2$3. <a href="$4" class="cd-notification-reloadPage">Reload the page</a>$5.',
  'notification-newcomments-desktop': '$1 new {{plural:$1|comment|comments|comments}}$2 on page "$3"$4.',
  'notification-newcomments-maybeinteresting': 'that may be interesting to you',
  'notification-formdata': 'form data will not be lost',
  'notification-part-insection': 'in section "$1"',
  'notification-part-onthispage': 'on this page',

  // Watchlist page
  'wl-button-switchinteresting-tooltip': 'Show only comments in sections that I watch and comments addressed to me',
  'wl-button-editwatchedsections-tooltip': 'Edit sections that I watch',
  'wl-button-scriptsettings-tooltip': '{{int:convenientdiscussions-script-name}} settings',

  // Log pages
  'lp-comment': 'comment',
  'lp-comment-tooltip': 'Go to comment',
  'lp-comment-toyou': 'the comment is addressed to you',
  'lp-comment-watchedsection': 'you are watching this section',

  // Restore comment forms notifications
  'restore-restored-title': 'Session restored',
  'restore-restored-text': 'The unsent comment forms have been automatically recovered.',
  'restore-suggestion-text': 'You had unsent comment forms when you last visited the page. <a class="cd-message-restoreCommentForms">Restore them</a>. Click the balloon to close it.',

  // Rescue comment forms' content dialog
  'rd-intro': 'Couldn\'t find the comments or sections on the page that some of the opened forms were related to. Below is the restored content of these forms. Copy it if you need.',
  'rd-close': 'Close',

  // Other
  'loading-ellipsis': 'Loading…',
  'addtopicbutton-tooltip': 'Open in a new tab to create a new topic on a standard page, not in {{int:convenientdiscussions-script-name-prepositional}}.',
};
