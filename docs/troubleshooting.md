# Troubleshooting

## Source recording is missing

If Studio reports that a source recording is unavailable, confirm the file still
exists. Use **Relink Source Recording** and select the same recording at its new
location. If the file was deleted, restore it from your backup before relinking.

## OpenAI API key is missing

Open Lyreline Studio Settings, add your OpenAI API key, and save it. The key is
stored in macOS Keychain. You can test the connection before generating speech.

## Narration generation fails

Confirm the selected voice is available and the narration text is not empty. For
OpenAI Speech, confirm the Mac is online, the saved API key is valid, and the
OpenAI account can use the selected speech model. Retry after a temporary rate
limit or service interruption.

## Generated narration is missing

If a project cannot locate generated audio, avoid publishing until the affected
section has valid narration. Regenerate the narration or attach a replacement
audio file, then save the project.

## A Studio package is invalid or corrupt

Open an unmodified `.lyrelinestudio` package. Studio validates the manifest,
assets, format version, and checksums before installing it. A renamed ordinary
folder is not a valid Studio package. Obtain a fresh export if validation fails.

## Lyreline is not installed

The complete Capture & Author workflow requires the separate Lyreline app.
Install Lyreline, open it once, and retry **Capture & Author**. Studio can still
manage and publish existing compatible projects without adding Lyreline's
capture editor to Studio.

## Handoff between the apps fails

Save both projects, confirm the current versions of Lyreline and Lyreline Studio
are installed, and retry. If the other app cannot be opened, use the offered save
option and import the prepared package manually. Do not delete either managed
project while troubleshooting.

## Studio reports a project identity collision

Choose **Open Existing** to work with the managed project that already represents
the incoming identity. Choose **Import as Copy** only when you intentionally want
an independent copy. Cancel if you are unsure; cancellation changes nothing.

## Publishing or export fails

Confirm there is enough free disk space and that the selected destination is
writable. Choose the destination again through the macOS save panel. Confirm
required source media and narration are available, then retry. Existing output
should remain unchanged when replacement fails.

For further help, visit [Support](support.md) or prepare a report on the
[Feedback](feedback.md) page.
