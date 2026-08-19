# Narration

Each narrated section keeps its Lyreline source content separate from its Studio
narration draft. You can adapt the draft for spoken delivery without changing
the canonical procedure in Lyreline.

## Narration choices

### Imported audio

Attach an existing WAV, AIFF, or M4A narration file. Studio copies managed audio
into the project, reads its duration, and updates visual timing.

### Apple Speech

Apple Speech uses the speech voices available through macOS. Choose a voice and
adjust the supported speaking settings before generating narration. Voice
availability can vary by Mac and installed system voices.

### OpenAI Speech

OpenAI Speech is optional. You provide your own OpenAI API key in Lyreline Studio
Settings. The key is stored in macOS Keychain rather than in project files or
preferences.

When OpenAI Speech is selected, the narration text required to generate speech
is sent to OpenAI using the API key you provide. Narration text is sent when you
initiate generation. Testing the OpenAI connection also contacts OpenAI using
that key. No OpenAI request occurs merely because Lyreline Studio is launched.

If a key is missing, open Lyreline Studio Settings, add and save the key, and
optionally test the connection. OpenAI account access, usage, availability, and
data handling are governed by OpenAI's terms and policies.

## Source updates and narration review

When Lyreline source changes, Studio does not silently replace an established
narration draft. Review the updated source, revise or regenerate narration as
needed, and use the review controls to confirm that the section and project
updates have been addressed.

Generated narration can become out of date when its narration draft changes.
Regenerate it before previewing or publishing the final result.
