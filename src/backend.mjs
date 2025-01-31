import PocketBase from 'pocketbase';

const pb = new PocketBase('http://localhost:8090');

export async function getOffres() {
    try {
        let data = await pb.collection('maison').getFullList({
            sort: '-created',
        });
        data = data.map((item) => {
            item.createdAt = new Date(item.created);
            return item;
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des maisons', error);
        return [];
    }
}